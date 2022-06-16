const sinon = require('sinon');
const { expect } = require('chai');

const MovieServices = require('../../services/movieService');
const MovieController = require('../../controllers/movieController');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {

    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      sinon.stub(MovieServices, 'create').resolves(false);
    });

    after(() => {
      MovieServices.create.restore();
    });

    it('é chamado o status com código 400', async () => {
      await MovieController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o sendo com a mensagem dados inválidos', async () => {
      await MovieController.create(request, response);

      expect(response.send.calledWith('Dados Inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', () => {

    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Enter The Void',
        directedBy: 'Gaspar Noé',
        releaseYear: 2009
      };


      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      sinon.stub(MovieServices, 'create').resolves(true);
    });

    after(() => {
      MovieServices.create.restore();
    });

    it('é chamado o status com código 201', async () => {
      await MovieController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MovieController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });

});