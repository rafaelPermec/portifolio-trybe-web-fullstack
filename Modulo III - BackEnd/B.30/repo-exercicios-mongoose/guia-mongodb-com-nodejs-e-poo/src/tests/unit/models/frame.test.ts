import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/frame.model';
import { Model } from 'mongoose';
import { allFrameMockWithId, frameMock, frameMockWithId } from '../../mocks/frameMock.test';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(frameMockWithId);
    sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'findOneAndDelete').resolves(frameMockWithId);
    sinon.stub(Model, 'find').resolves(allFrameMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a frame', () => {
    it('successfully created', async () => {
      const newFrame = await frameModel.create(frameMock);
      expect(newFrame).to.be.deep.equal(frameMockWithId);
    });
  });

  describe('searching for frames', () => {
    it('successfully found', async () => {
      const frameFound = await frameModel.read();
      expect(frameFound).to.be.deep.equal(allFrameMockWithId);
    });
  });

  describe('searching a frame', () => {
    it('successfully found', async () => {
      const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
      expect(framesFound).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      try {
        await frameModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('deleting a frame by id', () => {
    it('successfully found', async () => {
      const frameDeleted = await frameModel.destroy('62cf1fc6498565d94eba52cd');
      expect(frameDeleted).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      try {
        await frameModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

});
