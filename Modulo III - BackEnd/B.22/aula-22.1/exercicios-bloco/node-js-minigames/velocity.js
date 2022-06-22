const ask = require('readline-sync');
const velocity = require('./helpers/velocity_helper');

function main() {
  const depth = ask.questionInt(`The distance between (in kilometers): `);
  const time = ask.questionInt(`The time between (in hours): `);

  const averageTime = velocity(depth, time);

  console.log(`The average speed is about ${averageTime.toFixed(2)} km/h!`);
}

main();
