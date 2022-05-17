const fs = require('fs/promises');

const fileName = 'my-file.txt';

fs.writeFile(fileName, 'My textbook: right here. Right Now.')
  .then(() => console.log(`File written with success!`))
  .catch((err) => console.error(`Cannot wrote in that file:\n ${err.message}`));
