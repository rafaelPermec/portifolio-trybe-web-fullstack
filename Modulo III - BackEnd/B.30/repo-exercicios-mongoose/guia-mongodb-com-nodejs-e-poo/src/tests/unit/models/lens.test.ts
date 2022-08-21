import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/lens.model';
import { Model } from 'mongoose';
import { allLensMockWithId, lensMock, lensMockWithId } from '../../mocks/lensMock.test';

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves(allLensMockWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a lens', () => {
    it('successfully created', async () => {
      const newLens = await lensModel.create(lensMock);
      expect(newLens).to.be.deep.equal(lensMockWithId);
    });
  });

  describe('searching a lens', () => {
    it('successfully found', async () => {
      const lensFound = await lensModel.read();
      expect(lensFound).to.be.deep.equal(allLensMockWithId);
    });
  });

  describe('searching a lens by id', () => {
    it('successfully found', async () => {
      const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
      expect(lensFound).to.be.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('deleting a lens by id', () => {
    it('successfully found', async () => {
      const lensDeleted = await lensModel.destroy('62cf1fc6498565d94eba52cd');
      expect(lensDeleted).to.be.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

});
