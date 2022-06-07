const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env['MYSQL_PORT'];

const controllers = require('./controllers/cepController');
const middlewares = require('./middlewares');

app.use(express.json());

app.get('/cep/:cep', controllers.findAdressByCep);

app.use(middlewares.error);

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));