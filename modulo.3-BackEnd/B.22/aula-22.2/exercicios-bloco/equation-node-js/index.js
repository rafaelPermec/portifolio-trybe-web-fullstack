
const equation = (num1, num2, num3) => {
  return new Promise((res, rej) => {
    const doingMath = ((num1 + num2) * num3);
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      return rej(new Error(`Informe apenas números.`));
    } 
    if (doingMath < 100) {
      return rej(new Error(`Valor muito baixo.`));
    } 
    else return res(doingMath);
  })
};

const nume1 = Math.floor(Math.random() * 20 + 1);
const nume2 = Math.floor(Math.random() * 20 + 1);
const nume3 = Math.floor(Math.random() * 20 + 1);
const num4 = Math.floor(Math.random() * 20 + 1);
const num5 = Math.floor(Math.random() * 20 + 1);
const num6 = Math.floor(Math.random() * 20 + 1);
const num7 = Math.floor(Math.random() * 20 + 1);
const num8 = Math.floor(Math.random() * 20 + 1);
const num9 = Math.floor(Math.random() * 20 + 1);

equation(nume1, nume2, nume3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));

equation(num4, num5, num6)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));

equation(num7, num8, num9)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
