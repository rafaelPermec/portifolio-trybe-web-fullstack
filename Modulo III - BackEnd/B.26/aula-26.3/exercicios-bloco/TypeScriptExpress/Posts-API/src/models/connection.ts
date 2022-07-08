import mysql from 'mysql2/promise';

require('dotenv').config();

export default mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
