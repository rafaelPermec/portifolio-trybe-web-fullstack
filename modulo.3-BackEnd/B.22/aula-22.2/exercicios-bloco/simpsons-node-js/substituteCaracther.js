const fs = require('fs/promises');

const subtituteCaracther = async () => {
  const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const dataAll = await fs.readFile('./simpson.json', 'utf-8');

  const dataFile = JSON.parse(data);
  const dataAllFile = JSON.parse(dataAll);

  const dataWithoutNelson = await dataFile.filter(({name}) => name !== 'Nelson Muntz');

  const maggie = await dataAllFile.filter(({name}) => name === 'Maggie Simpson');

  dataWithoutNelson.push(maggie[0]);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(dataWithoutNelson));

  const simpsonFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8')
  return JSON.parse(simpsonFamily).map((e) => console.log(`${e.id}-${e.name}`));
}

subtituteCaracther();