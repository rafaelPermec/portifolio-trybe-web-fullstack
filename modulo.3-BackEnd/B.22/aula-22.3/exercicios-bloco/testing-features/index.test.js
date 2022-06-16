const fs = require('fs');

const { expect } = require('chai');
const sinon = require('sinon');

const { verificaNumero, escreveArquivo } = require('./index.js');

describe('Valida se na aplicação,', () => {
  describe('a função "verificaNumero":', () => {
    it('Vai receber um número como parâmetro e retornar uma string como resposta,', () => {
      const object = { name: 'xablauzer' };
      const result = verificaNumero(object);

      expect(result).to.be.equal('o valor deve ser um número');
    });
  });

  describe('Quando o número passado for:', () => {
    it('maior que 0 - deverá retornar "positivo":', () => {
      const number = 7;
      const result = verificaNumero(number);

      expect(result).to.be.equals('positivo');
    });

    it('menor que 0 - deverá retornar "negativo"', () => {
      const number = -3;
      const result = verificaNumero(number);

      expect(result).to.be.equals('negativo');
    });

    it('igual a 0 - deverá retornar "neutro"', () => {
      const number = 0;
      const result = verificaNumero(number);

      expect(result).to.be.equals('neutro');
    });
  });
});

describe('Valida se na aplicação que escreverá um conteúdo em um arquivo específico', () => {

  it('a função recebe dois parâmetros - o nome do arquivo e o conteúdo desse arquivo:', () => {

  });

  it('dá retorno com um "ok":', () => {

  });
});
