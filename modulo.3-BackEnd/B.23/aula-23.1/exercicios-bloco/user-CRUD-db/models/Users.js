const connection = require('./connection');

const serialize = ({ id, first_name: firstName, last_name: lastName, email }) => { id, firstName, lastName, email };

const createUser = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO `users_crud`.users (first_name, last_name, email, password) VALUES (?,?,?,?)';

  return await connection.execute(query, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
};

module.exports = {
  serialize,
  createUser,
};
