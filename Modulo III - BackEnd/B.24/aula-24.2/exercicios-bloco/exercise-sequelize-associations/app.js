const express = require('express');
require('express-async-errors');

const errorMiddleware = require('./middlewares/error');
const planController = require('./controllers/plan.controller');
const patientController = require('./controllers/patient.controller');
const surgeryController = require('./controllers/surgery.controller');
const loginController = require('./controllers/login.controller');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/plan', planController);
app.use('/patient', patientController);
app.use('/surgery', surgeryController);
app.use('/login', loginController)


app.use(errorMiddleware);

module.exports = app;