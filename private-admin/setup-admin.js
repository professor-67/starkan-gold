require('dotenv').config();
const fs = require('fs');
const readline = require('readline');
const bcrypt = require('bcryptjs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

(async () => {
  try {
    const username = (process.env.ADMIN_USERNAME || '').trim();

    if (!username) {
      console.error('ADMIN_USERNAME is empty. Set your chosen username in .env first.');
      process.exitCode = 1;
      return;
    }

    const password = await ask('Choose your admin password (input hidden is recommended): ');

    if (password.length < 12) {
      console.error('Password must contain at least 12 characters. Try again.');
      process.exitCode = 1;
      return;
    }

    const hash = await bcrypt.hash(password, 12);
    const envPath = '.env';
    let env = fs.readFileSync(envPath, 'utf8');

    env = env.replace(/^ADMIN_PASSWORD=.*$/m, '');
    env = env.replace(/^ADMIN_PASSWORD_HASH=.*$/m, '');

    env += `\nADMIN_PASSWORD_HASH=${hash}\n`;
    fs.writeFileSync(envPath, env, { mode: 0o600 });

    console.log('Admin password hash saved. The plaintext password was not stored.');
  } catch (error) {
    console.error('Setup failed:', error.message);
    process.exitCode = 1;
  } finally {
    rl.close();
  }
})();
