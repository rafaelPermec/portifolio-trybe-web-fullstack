const fs = require('fs');

const leArquivo = (nomeDoArquivo) => {
  try {
    return fs.readFileSync(nomeDoArquivo, 'utf-8');
  } catch (error) {
    return null;
  }
};

module.exports = leArquivo;
