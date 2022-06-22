const express = require('express');

const userRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
