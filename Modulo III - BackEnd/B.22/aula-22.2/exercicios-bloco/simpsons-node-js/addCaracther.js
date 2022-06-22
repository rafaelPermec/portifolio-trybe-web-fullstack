const fs = require('fs/promises');

const addCaracther = async () => {
  const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const dataAll = await fs.readFile('./simpson.json', 'utf-8');

  const dataFile = JSON.parse(data);
  const dataAllFile = JSON.parse(dataAll);

  const nelson = await dataAllFile.filter(({name}) => name === 'Nelson Muntz');

  dataFile.push(nelson[0]);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(dataFile));

  const simpsonFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8')
  return JSON.parse(simpsonFamily).map((e) => console.log(`${e.id}-${e.name}`));
}

addCaracther();