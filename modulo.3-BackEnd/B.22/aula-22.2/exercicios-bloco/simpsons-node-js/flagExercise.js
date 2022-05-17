const fs = require('fs').promises;

const flagExercise = async () => {
  const reading = await fs.readFile('./simpson.json', 'utf-8')
  const simpsons = JSON.parse(reading);
  const familyId = ['1', '2', '3', '4'];
  const caractersOut = simpsons.filter((e) => familyId.includes(e.id));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(caractersOut));

  const simpsonFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8')
  return JSON.parse(simpsonFamily).map((e) => console.log(`${e.id}-${e.name}`));
}

flagExercise();
