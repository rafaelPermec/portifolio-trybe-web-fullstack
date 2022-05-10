const imc = (weight, height) => {
  const imcOutput = weight / (height * height);
  return parseFloat(imcOutput).toFixed(2);
}

module.exports = imc;