const connection = require('./connection');

const getAll = async () => {
  const [ books ] = await connection.execute('SELECT books FROM model_example.books;');
  
  return books;
}

const getByAuthorId = async (id) => {
  const [ authorById ] = await connection.execute(`SELECT title FROM books WHERE author_id = ${id};`);
  
  return authorById;
}

module.exports = {
  getAll,
  getByAuthorId,
}