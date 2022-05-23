const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  user: process.env['MY_SQL_USER'],
  password: process.env['MY_SQL_PASSWORD'],
  host: process.env['MY_SQL_HOST'],
  database: process.env['MY_SQL_DATABASE'],
});

module.exports = connection;
