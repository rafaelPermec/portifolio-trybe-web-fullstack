const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3001;
const validateName = require('./Middlewares/validateName');
const validateField = require('./Middlewares/validateInfos');
const validateDate = require('./Middlewares/validateDate');
const validateWarranty = require('./Middlewares/validateWarraty');
const authMiddleware = require('./Middlewares/authMiddleware');

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  try {
    const { email, password, firstName, phone } = req.body;

    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: 'missing fields' });
    } return res.status(200).json(authMiddleware);
  } catch (err) {
    return res.status(500).end();
  }
});

app.use(authMiddleware);

app.post('/sales',
  validateName,
  validateField,
  validateDate,
  validateWarranty,
  (_req, res) => {
    res.status(201).json({ message: `Sale created successfully` });
  });

app.listen(PORT, () => console.log(`http://localhost:3001`));
