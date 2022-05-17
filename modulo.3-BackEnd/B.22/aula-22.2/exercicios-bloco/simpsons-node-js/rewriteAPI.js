const fs = require('fs').promises;

const rewriteAPI = async () => {
  const reading = await fs.readFile('./simpson.json', 'utf-8')
  const simpsons = JSON.parse(reading);
  const caractersOut = simpsons.filter((e) => e.id !== '10' && e.id !== '6');

  caractersOut.forEach((e) => console.log(`${e.id}-${e.name}`));
}

rewriteAPI();
