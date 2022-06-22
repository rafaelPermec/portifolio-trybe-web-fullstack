const fizzBuzz = (number) => {
  return new Promise((res, rej) => {

    if (number % 3 === 0 && number % 5 === 0) {
      return res('FizzBuzz');
    } if (number % 3 === 0) {
      return res('Fizz');
    } if (number % 5 === 0) {
      return res('Buzz');
    } else {
      rej(number);
    }

  });
}

const numberGenerator = () => {
  return Math.round(Math.random() * 100 + 1);
}

fizzBuzz(numberGenerator())
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
