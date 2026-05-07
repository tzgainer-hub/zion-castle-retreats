const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/inquire', (req, res) => {
  console.log('Inquiry received:', JSON.stringify(req.body, null, 2));
  res.json({ ok: true, message: 'Inquiry received. We will be in touch within 24 hours.' });
});

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Bella Vista Reset listening on port ${PORT}`);
});
