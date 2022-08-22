import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { lensMock, lensMockWithId, allLensMockWithId } from '../../mocks/lensMock.test';
import LensController from '../../../controllers/lens.controller';
import LensService from '../../../services/lens.service';
import LensModel from '../../../models/lens.model';


describe('Frame Controller', () => {
  const lensModel = new LensModel()
  const lensService = new LensService(lensModel);
  const lensController = new LensController(lensService);

  const req = {} as Request;

  const res = {} as Response;

  before(() => {
    sinon.stub(lensService, 'create').resolves(lensMock);
    sinon.stub(lensService, 'readOne').resolves(lensMock);
    sinon.stub(lensService, 'read').resolves(allLensMockWithId);
    sinon.stub(lensService, 'destroy').resolves(lensMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Frame', () => {
    it('Success', async () => {
      req.body = lensMock;
      await lensController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMock)).to.be.true;
    });
  });

  describe('ReadOne Frame', () => {
    it('Success', async () => {

      req.params = { id: lensMockWithId._id };
      await lensController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMock)).to.be.true;
    });
  });

  describe('Read Frame', () => {
    it('Success', async () => {

      req.params = { id: lensMockWithId._id };
      await lensController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allLensMockWithId)).to.be.true;
    });
  });

  describe('Destroy Frame', () => {
    it('Success', async () => {

      req.params = { id: lensMockWithId._id };
      await lensController.destroy(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMockWithId)).to.be.true;
    });
  });
});