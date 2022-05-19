const fs = require('fs/promises');
const crypto = require('crypto');

const getSimpsons = () => {
  return fs.readFile('./simpsons.json', 'utf-8')
            .then((family) => JSON.parse(family));
}

const setSimpsons = (newSimpsons) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons))
}

const generateCrypto = () => {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = { 
  getSimpsons, 
  setSimpsons,
  generateCrypto 
}