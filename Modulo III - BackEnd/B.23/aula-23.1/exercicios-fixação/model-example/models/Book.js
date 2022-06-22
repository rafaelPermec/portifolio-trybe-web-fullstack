const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT title FROM model_example.books;');

  return books;
}

const getByAuthorId = async (id) => {
  const [authorById] = await connection.execute(`SELECT title FROM books WHERE author_id = ${id};`);

  return (authorById.length === 0 ? null : authorById);
}

const isValid = async (title, author_id) => {
  if (!author_id || typeof author_id !== 'number') return false;
  if (!title || typeof title !== 'string' || title.length < 3) return false;

  return true;
}

const create = async (title, author_id) => (
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)', [title, author_id]
  )
)

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create,
}