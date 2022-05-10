const ask = require('readline-sync');
const imc = require('./helpers/imc_helper');


const sensitive = ask.question('We gonna ask sensitive questions about your weight and height. Do you accept this questions? [y/n] ');

if (sensitive === 'y') {
  const name = ask.question('What is your name? ');
  const weight = ask.questionFloat('What is your weight (in kilograms)? ');
  const height = ask.questionFloat('What is your height (in meters)? ');

  const result = imc(weight, height);

  console.log(`Hello ${name}! =)
  Your IMC is about: ${result}.`);

  if (result < 18.5) {
    console.log(`You are Underweight (thin).`);
  } else if (result > 18.5 && result < 24.9 ) {
    console.log(`You got Normal weight.`);
  } else if (result > 25 && result < 29.9) {
    console.log(`You are Overweight (overweight)`);
  } else if (result > 30 && result < 34.9) {
    console.log(`Obesity grade I.`);
  } else if (result > 35 && result < 39.9) {
    console.log(`Obesity grade II`);
  } else if (result > 40) {
    console.log(`Between Obesity grades III and IV`);
  }

} else if (sensitive !== 'y') {
  console.log(`Well... Goodbye then! =)`)
}

