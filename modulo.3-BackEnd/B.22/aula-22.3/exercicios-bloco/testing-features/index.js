function verificaNumero(number) {
  switch (Math.sign(number)) {
    case 1: return 'positivo'
    case -1: return 'negativo'
    case (0 || -0): return 'neutro'
    default: return 'o valor deve ser um número'
  }
};

module.exports = { verificaNumero };
