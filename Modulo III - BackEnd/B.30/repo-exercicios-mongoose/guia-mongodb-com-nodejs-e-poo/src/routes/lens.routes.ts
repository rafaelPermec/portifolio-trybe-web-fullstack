import { Router } from 'express';
import LensController from '../controllers/lens.controller';
import LensModel from '../models/lens.model';
import LensService from '../services/lens.service';

const route = Router();

const lens = new LensModel();
const lensService = new LensService(lens);
const lensController = new LensController(lensService);

route
  .post('/', (req, res) => lensController.create(req, res))
  .get('/', (req, res) => lensController.read(req, res));
route
  .get('/:id', (req, res) => lensController.readOne(req, res))
  .delete('/:id', (req, res) => lensController.destroy(req, res));

export default route;
