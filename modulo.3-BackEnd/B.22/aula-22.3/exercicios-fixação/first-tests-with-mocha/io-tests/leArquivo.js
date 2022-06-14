const fs = require('fs');

const leArquivo = (nomeDoArquivo) => {
  try {
    const conteudo = fs.readFileSync(nomeDoArquivo, 'utf-8');
    return conteudo;
  } catch (error) {
    return null;
  }
};

module.exports = leArquivo;
