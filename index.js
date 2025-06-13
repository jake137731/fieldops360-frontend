const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let leads = [];

app.post('/lead', (req, res) => {
  leads.push(req.body);
  res.send({ status: 'Lead saved', data: req.body });
});

app.listen(PORT, () => {
  console.log(`CRM API running on port ${PORT}`);
});
