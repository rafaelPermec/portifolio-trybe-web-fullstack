const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env['MYSQL_PORT'];

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));