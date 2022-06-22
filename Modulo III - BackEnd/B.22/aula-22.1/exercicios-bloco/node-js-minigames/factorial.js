const ask = require('readline-sync');
const factorial = require('./helpers/factorial_helper');

function main() {
  const firstQuestion = ask.questionInt(`Which number you wanna get the factorial expression? [only int numbers, please!] `);

  if(firstQuestion <= 0) {
    console.log(`Only number greater than zero, please!`);
  } console.log(`x: ${firstQuestion}`);

  console.log(`Factoring the result... It is ${factorial(firstQuestion)}`);
}

main();
