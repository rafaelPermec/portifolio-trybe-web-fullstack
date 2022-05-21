const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ errorMessage: 'Invalid data.' })
  }
  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ successMessage: 'Author created succefully!' })
})

app.get('/books', async (_req, res) => {
  const titles = await Book.getAll();
  res.status(200).json(titles);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Book.getByAuthorId(id);

  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Book.isValid(title, author_id)) return res.status(400).json({ errorMessage: 'Invalid data' });

  await Book.create(title, author_id);
  res.status(201).json({ successMessage: 'Author created succefully!' });
})


app.listen(port, console.log(`Listening on port ${port}`));

app.use('*', (_req, res) => (
  res.status(500).json({ errorMessage: `This is not the URL you're looking for...` })
));