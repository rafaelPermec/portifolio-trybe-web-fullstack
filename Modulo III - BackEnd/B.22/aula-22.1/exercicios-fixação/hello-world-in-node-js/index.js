const readline = require('readline-sync');

const name = readline.question('What is your name?')
const status = readline.question('What are you doing here?');

const helloWorld = (stringParam) => {
  for (let i = 0; i <= stringParam.length; i++) {
    console.log(stringParam.slice(0, i));
  }
  console.log('* the new fizzBuzz! *');
}

helloWorld('Hello World!');
console.log(`Hello, ${name}! You are here ${status}!`);
