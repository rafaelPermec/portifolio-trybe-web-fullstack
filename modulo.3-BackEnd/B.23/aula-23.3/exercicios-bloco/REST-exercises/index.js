const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers/productController');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', controllers);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
