const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3001;
const validateName = require('./Middlewares/validateName');
const validateField = require('./Middlewares/validateInfos');
const validateDate = require('./Middlewares/validateDate');

app.use(bodyParser.json());

app.post('/sales',
  validateName,
  validateField,
  validateDate,
  (_req, res) => {
    res.status(201).json({ message: `Sale created successfully` });
  })

app.listen(PORT, () => console.log(`http://localhost:3001`));
