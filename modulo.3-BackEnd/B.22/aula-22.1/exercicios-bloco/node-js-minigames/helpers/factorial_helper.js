const factorial = (x) => {
  let fact = x;
  const firstMult = fact - 1;

  for (let i = firstMult; i > 0; i -= 1) {
    fact *= i;
  }

  return fact;
}

module.exports = factorial;
