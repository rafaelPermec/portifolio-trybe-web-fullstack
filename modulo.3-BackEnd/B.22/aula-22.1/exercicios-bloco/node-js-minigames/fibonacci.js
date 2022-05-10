const ask = require('readline-sync');
const fibonacci = require('./helpers/fibonacci_helper');

function main() {
  const number = ask.questionInt(`Enter with the number of answers you want for a fibonacci equation: `);

  if(number <= 0) console.log(`Place a number greater than zero!`), main();

  console.log(`n: ${number}`);

  fibonacci(number - 2);
}

main();
