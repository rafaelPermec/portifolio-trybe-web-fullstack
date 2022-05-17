const fs = require('fs').promises;

const byId = async (id) => {
  const reading = await fs.readFile('./simpson.json', 'utf-8')
  const simpsons = JSON.parse(reading);
  const caractersById = simpsons.find((e) => Number(e.id) === id);

  if (!caractersById) console.log(new Error('id não encontrado'));

  return caractersById;
}

const main = () => {
  const randomNum = Math.floor(Math.random() * 11 + 1);
  
  byId(randomNum)
    .then(e => console.log(`${e.id} - ${e.name}`));

}

main();
