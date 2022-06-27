const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const booksRoutes = require('./src/routes/bookRoutes');

app.use(express.json());

app.use('/books', booksRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
