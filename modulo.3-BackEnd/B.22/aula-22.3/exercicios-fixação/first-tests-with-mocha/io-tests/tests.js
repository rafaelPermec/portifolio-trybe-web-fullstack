const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'Me contrata que eu sou bom de trabalho! ~risos sérios~';

describe('Lê um arquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
        const answer = leArquivo('arquivo.txt');
    
      it('é uma string', () => {
        expect(answer).to.be.a('string');
      });

      it('é igual ao conteudo do arquivo', () => {
        expect(answer).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    
    });
  });

describe('Quando o arquivo NÃO existe', () => {
  describe('a resposta', () => {
    const answer = leArquivo('file-in-fancy-inglish.txt');

    it('é igual a "null"', () => {
      expect(answer).to.be.equal(null);
    });

    });
  });
});
