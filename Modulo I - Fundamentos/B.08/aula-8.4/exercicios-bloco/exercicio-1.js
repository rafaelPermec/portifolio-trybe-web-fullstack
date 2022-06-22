// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  let bigArray =  arrays
  .reduce( (acc, cur) => acc + cur )
  .split(',');
  return bigArray;
};

console.log(flatten());