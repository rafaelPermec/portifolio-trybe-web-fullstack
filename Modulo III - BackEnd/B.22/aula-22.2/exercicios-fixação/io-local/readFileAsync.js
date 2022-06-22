const fs = require('fs').promises;

const fileName = 'my-file.txt';

fs.readFile(fileName, 'utf-8')
  .then((data) => console.log(`File Content:\n ${data}`))
  .catch((err) => {
    console.error(`It's not possible read the file ${fileName}\n Error: ${err}`);
    process.exit(1);
  });
