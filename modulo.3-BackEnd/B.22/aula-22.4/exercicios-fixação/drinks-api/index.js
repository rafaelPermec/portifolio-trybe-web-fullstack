const express = require('express');
const app = express();

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (_req, res) => {
  const sortedDrinks = drinks.sort((a, b) => a.name < b.name ? 1 : -1)
  res.json(sortedDrinks);
});

app.listen(3001, () => {
  console.log('App is listening to port 3001');
});
