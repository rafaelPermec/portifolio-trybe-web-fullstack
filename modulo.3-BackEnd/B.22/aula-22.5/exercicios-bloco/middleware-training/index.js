const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3001;

app.use(bodyParser.json());

app.post('/sales', (_req, res) => {
  res.status(201).json({ message: `Sale created successfully` });
})

app.listen(PORT, () => console.log(`http://localhost:3001`));
