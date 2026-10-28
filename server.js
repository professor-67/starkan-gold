require('dotenv').config();

const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Database = require('better-sqlite3');
const { GoogleGenAI } = require('@google/genai');

const app = express();
const production = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

if (!process.env.SESSION_SECRET || !process.env.ADMIN_USERNAME ||
    !process.env.ADMIN_PASSWORD_HASH) {
  console.error('Admin environment variables must be configured in Render Environment.');
}

if (production) app.set('trust proxy', 1);

app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: false, strictTransportSecurity: production ? undefined : false }));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

const dataDir = path.join(__dirname, 'data');
fs.mkdirSync(dataDir, { recursive: true });
try { fs.chmodSync(dataDir, 0o700); } catch {}

const db = new Database(path.join(dataDir, 'starkan.sqlite'));
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    sid TEXT PRIMARY KEY,
    sess TEXT NOT NULL,
    expired INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS sessions_expired_idx ON sessions(expired);
`);

class SQLiteSessionStore extends session.Store {
  constructor(database) {
    super();
    this.db = database;
    this.getStmt = database.prepare('SELECT sess, expired FROM sessions WHERE sid = ?');
    this.setStmt = database.prepare(`
      INSERT INTO sessions(sid, sess, expired) VALUES(?, ?, ?)
      ON CONFLICT(sid) DO UPDATE SET sess=excluded.sess, expired=excluded.expired
    `);
    this.destroyStmt = database.prepare('DELETE FROM sessions WHERE sid = ?');
  }
  get(sid, cb) {
    try {
      const row = this.getStmt.get(sid);
      if (!row || row.expired <= Date.now()) {
        this.destroyStmt.run(sid);
        return cb(null, null);
      }
      cb(null, JSON.parse(row.sess));
    } catch (e) { cb(e); }
  }
  set(sid, sess, cb = () => {}) {
    try {
      const expired = sess.cookie?.expires
        ? new Date(sess.cookie.expires).getTime()
        : Date.now() + 8 * 60 * 60 * 1000;
      this.setStmt.run(sid, JSON.stringify(sess), expired);
      cb(null);
    } catch (e) { cb(e); }
  }
  destroy(sid, cb = () => {}) {
    try { this.destroyStmt.run(sid); cb(null); }
    catch (e) { cb(e); }
  }
  touch(sid, sess, cb = () => {}) {
    this.set(sid, sess, cb);
  }
}

app.use(session({
  name: 'starkan.admin.sid',
  secret: process.env.SESSION_SECRET,
  store: new SQLiteSessionStore(db),
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    httpOnly: true,
    secure: 'auto',
    sameSite: 'strict',
    maxAge: 8 * 60 * 60 * 1000
  }
}));

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: 'Too many login attempts. Please try again later.'
});

const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;

app.use(express.static(path.join(__dirname, 'public'), {
  index: 'index.html',
  dotfiles: 'deny'
}));

// TEMP_ADMIN_ROUTE_TRACE
app.use((req, res, next) => {
  if (req.path.startsWith('/admin')) {
    console.log('[ADMIN TRACE]', req.method, req.originalUrl,
      'sessionID=', req.sessionID,
      'authenticated=', req.session?.adminAuthenticated === true);
    res.on('finish', () => console.log('[ADMIN TRACE RESULT]',
      req.method, req.originalUrl, 'status=', res.statusCode,
      'location=', res.getHeader('Location') || '(none)'));
  }
  next();
});

function requireAdmin(req, res, next) {
  if (req.session?.adminAuthenticated === true) return next();
  if (req.path.startsWith('/api/')) {
    return res.status(401).json({ error: 'Authentication required.' });
  }
  return res.redirect('/admin/login');
}

function safeEqual(a, b) {
  const aa = Buffer.from(a);
  const bb = Buffer.from(b);
  return aa.length === bb.length && crypto.timingSafeEqual(aa, bb);
}

app.get('/admin/login', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.type('html').send(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>STARKAN GOLD · Admin Login</title>
<style>
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0d0d0d;color:#f5f0df;font:16px Arial,sans-serif;padding:20px}
form{width:min(420px,100%);background:#171717;border:1px solid #59471e;border-radius:16px;padding:30px}
h1{color:#d4af37;font-size:23px;letter-spacing:1px}p{color:#aaa;font-size:14px;line-height:1.6}
label{display:block;margin:18px 0 8px;font-size:13px;color:#d4af37}
input{width:100%;padding:13px;background:#0d0d0d;color:#fff;border:1px solid #444;border-radius:8px}
button{width:100%;margin-top:24px;padding:13px;background:#d4af37;border:0;border-radius:8px;font-weight:bold;cursor:pointer}
.error{color:#ff9b9b;min-height:20px}html[dir=rtl] form{text-align:right}
</style></head><body><form method="post" action="/admin/login">
<h1>STARKAN GOLD</h1><p>Secure administration · Espace privé · Administrationsbereich · Администрирование</p>
<div class="error">${req.query.error === '1' ? 'Login failed. Check your credentials.' : ''}</div>
<label for="username">Username</label><input id="username" name="username" autocomplete="username" required maxlength="100">
<label for="password">Password</label><input id="password" name="password" type="password" autocomplete="current-password" required maxlength="200">
<button type="submit">Sign in · Se connecter · دخول</button>
</form></body></html>`);
});

app.post('/admin/login', loginLimiter, async (req, res, next) => {
  try {
    const username = typeof req.body.username === 'string' ? req.body.username : '';
    const password = typeof req.body.password === 'string' ? req.body.password : '';
    const userOK = safeEqual(username, process.env.ADMIN_USERNAME);
    const passOK = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);

    if (!userOK || !passOK) {
      return res.redirect(303, '/admin/login?error=1');
    }

    req.session.regenerate(err => {
      if (err) return next(err);
      req.session.adminAuthenticated = true;
      req.session.adminUsername = process.env.ADMIN_USERNAME;
      req.session.save(saveErr => {
        if (saveErr) return next(saveErr);
        res.redirect(303, '/admin/');
      });
    });
  } catch (e) { next(e); }
});

app.post('/admin/logout', requireAdmin, (req, res, next) => {
  req.session.destroy(err => {
    if (err) return next(err);
    res.clearCookie('starkan.admin.sid', {
      httpOnly: true, secure: production, sameSite: 'strict'
    });
    res.redirect(303, '/admin/login');
  });
});

app.get('/admin.js', requireAdmin, (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.type('application/javascript').sendFile(path.join(__dirname, 'private-admin', 'admin.js'));
});

// Removed: Express treats /admin and /admin/ as equivalent by default.

app.get('/admin/', requireAdmin, (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.sendFile(path.join(__dirname, 'private-admin', 'index.html'));
});

app.use('/admin', (req, res, next) => {
  if (req.path === '/login') return next();
  return requireAdmin(req, res, next);
});

app.post('/api/chat', async (req, res) => {
  try {
    if (!ai) {
      return res.status(503).json({ error: 'Assistant is not configured yet.' });
    }

    const message = typeof req.body.message === 'string'
      ? req.body.message.trim()
      : '';

    if (!message || message.length > 2000) {
      return res.status(400).json({ error: 'Please enter a question under 2000 characters.' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `
You are STARKAN ASSISTANCE, the customer service AI for STARKAN GOLD, a Moroccan brand.
Answer the customer's actual question in the same language: Moroccan Darija, Arabic, French, English, German, or Russian.
Help with Moroccan crafts, Fassi embroidery, home decor, gifts, beauty products, accessories, and business inquiries.
Be friendly, professional, clear, and concise.
Never invent prices, stock, shipping times, refund policies, payment status, or order details.
If a fact is not provided, explain that the STARKAN GOLD team must confirm it.
Never ask for passwords, full payment card details, or sensitive personal information.
Do not claim that an order or payment has been completed.
`
      }
    });

    res.json({
      reply: response.text || 'Please contact the STARKAN GOLD team for further assistance.'
    });
  } catch (error) {
    console.error('Gemini error:', error.message);
    res.status(500).json({
      error: 'The AI assistant is temporarily unavailable. Please try again.'
    });
  }
});

app.get('/api/admin/status', requireAdmin, (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ authenticated: true, username: req.session.adminUsername });
});

app.use((err, req, res, next) => {
  console.error('Request error:', {
    method: req.method,
    path: req.path,
    message: err.message,
    code: err.code,
    stack: err.stack
  });
  if (res.headersSent) return next(err);
  res.status(500).send('An unexpected server error occurred.');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`STARKAN GOLD server running on port ${port}`);
});
