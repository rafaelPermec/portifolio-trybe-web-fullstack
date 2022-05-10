const factorial = (x) => {
  let factorial = x;
  const firstMult = factorial - 1;

  for (let i = firstMult; i > 0; i -= 1) {
    factorial *= i;
  }

  return factorial;
}

module.exports = factorial;
