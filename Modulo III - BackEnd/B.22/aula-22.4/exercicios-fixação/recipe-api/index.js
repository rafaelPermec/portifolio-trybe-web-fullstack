const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Croque Monsieur', price: 22.0, waitTime: 5 },
  { id: 2, name: 'Croque au Hollandeise', price: 26.0, waitTime: 10 },
  { id: 3, name: 'Coq au Vin', price: 75.0, waitTime: 15 },
];

app.get('/recipes', (_req, res) => {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('App is listening to port 3001');
});
