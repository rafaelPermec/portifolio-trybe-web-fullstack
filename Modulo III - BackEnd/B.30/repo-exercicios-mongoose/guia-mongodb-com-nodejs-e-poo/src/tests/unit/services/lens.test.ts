import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import LensModel from '../../../models/lens.model';
import LensService from '../../../services/lens.service';
import { lensMock, lensMockWithId, allLensMockWithId } from '../../mocks/lensMock.test';

describe('Lens Service', () => {
  const lensModel = new LensModel();
  const lensService = new LensService(lensModel);

  before(() => {
    sinon.stub(lensModel, 'create')
      .resolves(lensMockWithId);
    sinon.stub(lensModel, 'destroy')
      .resolves(lensMockWithId);
    sinon.stub(lensModel, 'read')
      .resolves(allLensMockWithId);
    sinon.stub(lensModel, 'readOne')
      .onCall(0)
      .resolves(lensMockWithId)
      .onCall(1).resolves(null);
  })
  after(() => {
    sinon.restore()
  })
  describe('Create Lens', () => {
    it('Success', async () => {
      const lensCreated = await lensService.create(lensMock);

      expect(lensCreated).to.be.deep.equal(lensMockWithId);
    });

    it('Failure', async () => {
      try {
        await lensService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('ReadOne Lens', () => {
    it('Success', async () => {
      const lensCreated = await lensService.readOne(lensMockWithId._id);

      expect(lensCreated).to.be.deep.equal(lensMockWithId);
    });

    it('Failure', async () => {
      try {
        await lensService.readOne(lensMockWithId._id);
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('Destroy Lens', () => {
    it('Success', async () => {
      const lensDeleted = await lensService.destroy(lensMockWithId._id);

      expect(lensDeleted).to.be.deep.equal(lensMockWithId);
    });

    it('Failure', async () => {
      try {
        await lensService.readOne(lensMockWithId._id);
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('Read Lens', () => {
    it('Success', async () => {
      const lensCreated = await lensService.read();

      expect(lensCreated).to.be.deep.equal(allLensMockWithId);
    });
  });

});
