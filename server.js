// ── Introvert BFF — Backend Server ────────────────────────────────
// This file does two things:
//   1. Serves your HTML files (index.html and app.html)
//   2. Proxies Claude API calls so your API key is never exposed

const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// ── SERVE STATIC FILES ─────────────────────────────────────────────
// All your HTML/CSS/JS files sit in the same folder as this server.
// When you update app.html, just re-upload it — no server restart needed.
app.use(express.static(path.join(__dirname)));

// ── CLAUDE API PROXY ───────────────────────────────────────────────
// Your app calls /api/claude instead of Anthropic directly.
// The API key lives only here, in Replit's secret environment variables.
app.post('/api/claude', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: { message: 'API key not configured on server.' } });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Claude API error:', err);
    res.status(500).json({ error: { message: 'Failed to reach Claude API.' } });
  }
});

// ── START ──────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Introvert BFF running on port ${PORT}`);
});
