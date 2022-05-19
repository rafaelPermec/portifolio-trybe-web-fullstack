const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'not_here_satan',
  password: 'not_here_satan',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;