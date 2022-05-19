const mysql = require('mysql2/promise');

//user & password? not_today_satan!
const connection = mysql.createPool({
  user: '',
  password: '',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
