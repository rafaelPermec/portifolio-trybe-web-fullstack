const ask = require('readline-sync');

const scripts = [
  { name: `Calculate your BodyIMC?`, path:'./imc.js' },
  { name: `What is the car velocity?`, path:'./velocity.js' },
  { name: `Trivia Number?`, path:'./trivia.js' },
  { name: `Search for the factorial number?`, path:'./factorial.js' },
  { name: `Fibonacci Sequence?`, path:'./fibonacci.js' }
];

function choosenScript() {
  const message = 'What you wanna do here? \n';

  const menu = scripts.reduce((arr, cur, index) => `${arr}${index + 1} - ${cur.name}\n`, message);

  const choosenOne = ask.questionInt(menu) - 1;

  return scripts[choosenOne];
}

function main() {
  const script = choosenScript();
  if (!script) console.log(`Please, try again with a valid number.`);
  require(script.path);
}

main();
