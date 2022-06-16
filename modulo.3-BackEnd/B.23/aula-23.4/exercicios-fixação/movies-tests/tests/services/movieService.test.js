const { expect } = require('chai');
const sinon = require('sinon');

const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no banco de dados', () => {

  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um booleano', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o booleano contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equals(false);
    });

  });

  describe('quando o payload é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Enter The Void',
      directedBy: 'Gaspar Noé',
      releaseYear: 2009
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create').resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objecto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.property('id');
    });

  });
});
