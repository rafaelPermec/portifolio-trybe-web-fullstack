function verificaNumero(number) {
  if (typeof number !== 'number') return 'o valor deve ser um número';

  switch (Math.sign(number)) {
    case 1: return 'positivo';
    case -1: return 'negativo';
    default: return 'neutro'
  }
};

function escreveArquivo(arquivo, conteudo) {

};

module.exports = { verificaNumero, escreveArquivo };
