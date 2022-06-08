const fetch = require('node-fetch');

const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-type': 'application/json',
});

const body = JSON.stringify({
  job: 'FullStack Developer',
  email: 'dev.rafaelpermec@gmail.com',
  stack: 'MySQL, Express, React, Node.js (MERN)',
})

fetch('https://postman-echo.com/post?param1=teste', {
  headers,
  method: 'POST',
  body,
})
  .then((res) => (!res.ok ? Promise.reject(res) : res.json()))
  .then((data) => console.log(data))
  .catch((err) => (err.status ? console.error(`Failed w/ status: ${err.status}`) : console.error(err)));
