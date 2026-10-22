require('dotenv').config();
const express = require('express');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(express.json({ limit: '10kb' }));
app.use(express.static('public'));

const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;

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

Your job:
- Answer the customer's actual question, not with a generic canned reply.
- Reply in the same language as the customer: Moroccan Darija, Arabic, French, English, German, or Russian.
- Help with Moroccan crafts, Fassi embroidery, home decor, gifts, beauty products, accessories, and business inquiries.
- Be friendly, professional, clear, and concise.
- Give practical answers relevant to the question.
- Never invent product prices, stock, shipping times, refund policies, payment status, or order details.
- If a fact is not provided, explain that it needs confirmation from the STARKAN GOLD team.
- Never ask for passwords, full payment card details, or sensitive personal information.
- Do not claim that an order or payment has been completed.
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

const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`STARKAN GOLD server running at http://127.0.0.1:${port}`);
});
