const fetch = require('node-fetch');

fetch('https://postman-echo.com/get?param1=teste')
  .then((res) => (!res.ok ? Promise.reject(res) : res.json()))
  .then((data) => console.log(data))
  .catch((err) => (err.status ? console.error(`Failed w/ status: ${err.status}`) : console.error(err)));
