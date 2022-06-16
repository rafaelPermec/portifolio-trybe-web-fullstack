function verificaNumero(number) {
  const verifica = Math.sign(number);
  switch (verifica) {
    case 1: return 'positivo'
    case -1: return 'negativo'
    default: return 'neutro'
  }
};

module.exports = { verificaNumero };
