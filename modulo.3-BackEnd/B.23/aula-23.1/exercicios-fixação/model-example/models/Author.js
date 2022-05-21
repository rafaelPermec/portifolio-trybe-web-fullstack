const connection = require('./connection');


const serialize = (data) => {
  return {
    id: data.id,
    firstName: data.first_name,
    middleName: data.middle_name,
    lastName: data.last_name
  }
}

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM model_example.authors;');

  return authors.map(serialize).map(getNewAuthor);
}

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return { id, firstName, middleName, lastName, fullName };
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
}

const create = async (firstName, middleName, lastName) => (
  connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)', [firstName, middleName, lastName]
  )
)

module.exports = {
  serialize,
  getAll,
  isValid,
  create,
}