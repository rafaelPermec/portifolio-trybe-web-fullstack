const connection = require('./connection');
const Joi = require('joi');

const userValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const isValid = (data) => userValidation.validate(data);

const serialize = ({ id, first_name: firstName, last_name: lastName, email }) => ({ id, firstName, lastName, email });

const createUser = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO `users_crud`.users (first_name, last_name, email, password) VALUES (?,?,?,?);';

  const executeQuery = await connection.execute(query, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));

  return executeQuery;
};

const getUser = async () => {
  const query = 'SELECT * FROM `users_crud`.users;'
  const executeQuery = await connection.execute(query)
    .then(([results]) => results.map(serialize));

  return executeQuery;
};

const getById = async (id) => {
  const query = 'SELECT * FROM `users_crud`.users WHERE id = ?;';
  const executeQuery = await connection.execute(query, [id])
    .then(([results]) => (!results[0] ? null : serialize(results[0])));

  return executeQuery;
}

const updateUser = async (id, { firstName, lastName, email, password }) => {
  const query = 'UPDATE `users_crud`.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;'
  await connection.execute(query, [firstName, lastName, email, password, id]);
  return getById(id);
}

module.exports = {
  isValid,
  serialize,
  createUser,
  getUser,
  getById,
  updateUser,
};
