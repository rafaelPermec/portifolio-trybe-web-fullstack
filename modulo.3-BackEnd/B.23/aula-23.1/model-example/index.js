const express = require("express");
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const { id } = req.query;
  const books = await Book.getByAuthorId(id);
  
  res.status(200).json(books);
});

app.listen(port, console.log(`Listening on port ${port}`));
