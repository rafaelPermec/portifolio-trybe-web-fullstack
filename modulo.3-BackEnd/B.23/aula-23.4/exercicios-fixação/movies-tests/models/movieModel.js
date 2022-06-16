const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const query = `INSERT INTO model_example.movies (title, directedBy, releaseYear) VALUES (?, ?, ?)`
  const [result] = await connection.execute(query, [title, directedBy, releaseYear]);

  return { id: result.insertId };
};

module.exports = {
  create,
};
