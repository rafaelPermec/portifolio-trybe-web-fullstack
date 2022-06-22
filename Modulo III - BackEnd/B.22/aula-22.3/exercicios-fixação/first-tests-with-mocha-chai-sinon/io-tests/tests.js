const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'Me contrata que eu sou bom de trabalho! ~risos sérios~';


describe('Lê um arquivo', () => {
  describe('Quando o arquivo existe', () => {

    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const answer = leArquivo('arquivo.txt');
        expect(answer).to.be.a('string');
      });

      it('é igual ao conteudo do arquivo', () => {
        const answer = leArquivo('arquivo.txt');
        expect(answer).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });

    });
  });

  describe('Quando o arquivo NÃO existe', () => {

    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é igual a "null"', () => {
        const answer = leArquivo('file-in-fancy-inglish.txt');

        expect(answer).to.be.equal(null);
      });

    });
  });
});
