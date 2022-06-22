const ask = require('readline-sync');
const trivia = require('./helpers/trivia_helper');

function main() {
  const number = parseInt(Math.random() * 10, 10);
  const answer = ask.questionInt(`What number between 0 and 10 should you get?? `);

  trivia(number, answer);

  const newGame = ask.question(`Do you want to play it again? [y/n]`);

  if (newGame !== 'y') return console.log(`Ok! See you next time! =)`);

  main();
}

main();