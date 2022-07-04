enum pontosCardinais {
  norte = 'N',
  sul = 'S',
  leste = 'L',
  oeste = 'O'
};

const postoIpiranga : string = `Dê 30 passos para ${pontosCardinais.norte}, mais 5 para o ${pontosCardinais.oeste} e vire-se para o ${pontosCardinais.leste} para encontrar um posto ipiranga!`;

console.log(postoIpiranga);
