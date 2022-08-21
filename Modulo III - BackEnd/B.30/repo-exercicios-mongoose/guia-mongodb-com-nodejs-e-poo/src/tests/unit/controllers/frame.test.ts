import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { allFrameMockWithId, frameMock, frameMockWithId } from '../../mocks/frameMock.test';
import FrameController from '../../../controllers/frame.controller';
import FrameService from '../../../services/frame.service';
import FrameModel from '../../../models/frame.model';


describe('Frame Controller', () => {
  const frameModel = new FrameModel()
  const frameService = new FrameService(frameModel);
  const frameController = new FrameController(frameService);

  const req = {} as Request;

  const res = {} as Response;

  before(() => {
    sinon.stub(frameService, 'create').resolves(frameMock);
    sinon.stub(frameService, 'readOne').resolves(frameMock);
    sinon.stub(frameService, 'read').resolves(allFrameMockWithId);
    sinon.stub(frameService, 'destroy').resolves(frameMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Frame', () => {
    it('Success', async () => {
      req.body = frameMock;
      await frameController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('ReadOne Frame', () => {
    it('Success', async () => {

      req.params = { id: frameMockWithId._id };
      await frameController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('Read Frame', () => {
    it('Success', async () => {

      req.params = { id: frameMockWithId._id };
      await frameController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allFrameMockWithId)).to.be.true;
    });
  });

  describe('Destroy Frame', () => {
    it('Success', async () => {

      req.params = { id: frameMockWithId._id };
      await frameController.destroy(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMockWithId)).to.be.true;
    });
  });
});