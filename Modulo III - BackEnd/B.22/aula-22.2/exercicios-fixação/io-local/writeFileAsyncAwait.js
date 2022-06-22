const fs = require('fs/promises');

const fileName = 'my-file.txt';

const main = async () => {
  try {
    await fs.writeFile(fileName, 'This is a new text, for a new time!');
    console.log(`File written with success!`);
  } catch (err) {
    console.error(`Cannot wrote in that file:\n ${err.message}`);
  }
}

main();
