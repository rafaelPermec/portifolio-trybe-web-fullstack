const fibonacci = (number) => {
  let a = 1;
  let b = 1;

  for (let i = number; i >= 0; i -= 1) {
    if(b) console.log(b);
    const temp = a;
    a += b;
    b = temp;
  }
  console.log(b);
  return b;
}

module.exports = fibonacci;