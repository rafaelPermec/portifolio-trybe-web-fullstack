const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.use(bodyParser.json());

app.get('/drinks', (_req, res) => {
  const sortedDrinks = drinks.sort((a, b) => a.name < b.name ? 1 : -1);
  res.json(sortedDrinks);
});


app.post('/drinks', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  drinks.push({ id, name, price, waitTime });
  res.status(201).json({ message: `${id}, ${name}, ${price}, ${waitTime}` });
});

app.get('/drinks/search', (req, res) => {
  const { name, minPrice } = req.query;
  const filteredDrinks = drinks.filter((e) => e.name.includes(name) && e.price >= parseInt(minPrice));

  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', (req, res) => {
  const {id} = req.params;
  const drink = drinks.find((e) => e.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: '404 - Drink not found!' });

  res.status(200).json(drink);
});

app.listen(3001, () => {
  console.log('App is listening to port 3001');
});
