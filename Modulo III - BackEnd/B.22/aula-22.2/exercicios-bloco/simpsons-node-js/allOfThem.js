const fs = require('fs').promises;

const allOfThem = async () => {
  const reading = await fs.readFile('./simpson.json', 'utf-8')
  const simpsons = JSON.parse(reading);
  const caracters = simpsons.map(({ id, name }) => `${id} - ${name}`);

  caracters.forEach((e) => console.log(e));
}

allOfThem();
