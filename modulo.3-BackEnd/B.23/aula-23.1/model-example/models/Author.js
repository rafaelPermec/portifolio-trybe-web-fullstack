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
  const [ authors ] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM model_example.authors;');
  
  return authors;
}

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
  .filter((e) => e)
  .join(' ');

  return { id, firstName, middleName, lastName, fullName };
}

module.exports = {
  serialize,
  getAll,
  getNewAuthor,
}