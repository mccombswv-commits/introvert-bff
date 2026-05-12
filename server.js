const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// Landing page — root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'landing.html'));
});

// Login screen
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// App — pointing to app2.html to bust cache
app.get('/app.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'app2.html'));
});

// Serve static files (after explicit routes)
app.use(express.static(path.join(__dirname)));

// Claude API proxy
app.post('/api/claude', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: { message: 'API key not configured.' } });
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Social Survival Kit running on port ${PORT}`);
});
