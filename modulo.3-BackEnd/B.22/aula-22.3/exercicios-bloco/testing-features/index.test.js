const { expect } = require('chai');
const sinon = require('sinon');

const { verificaNumero } = require('./index.js');

describe('Valida se na aplicação.', () => {
  describe('a função "verificaNumero":', () => {
    it('Vai receber um número como parâmetro e retornar uma string como resposta,', () => {
      const number = typeof 'number';
      const result = verificaNumero(number);

      expect(result).to.be.a('string');
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
