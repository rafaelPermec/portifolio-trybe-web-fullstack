const express = require('express');
const app = express();

const helloWorldRequest = (_req, res) => {
  res.status(200).send('Hello World');
}

app.get('/hello', helloWorldRequest);

app.listen(3001, () => console.log('App is listening port 3001'));
