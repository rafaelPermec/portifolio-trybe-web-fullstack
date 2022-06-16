const sinon = require('sinon');
const { expect } = require('chai');

const MovieModel = require('../../models/movieModel');

describe('Insere um novo filme no database', () => {
  const payloadMovie = {
    title: 'Enter The Void',
    directedBy: 'Gaspar Noé',
    releaseYear: 2009
  }

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto:', async () => {
      const response = await MovieModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });

});
