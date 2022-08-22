import { Router } from 'express';
import FrameController from '../controllers/frame.controller';
import FrameModel from '../models/frame.model';
import FrameService from '../services/frame.service';

const route = Router();

const frame = new FrameModel();
const frameService = new FrameService(frame);
const frameController = new FrameController(frameService);

route
  .post('/', (req, res) => frameController.create(req, res))
  .get('/', (req, res) => frameController.read(req, res));
route
  .get('/:id', (req, res) => frameController.readOne(req, res))
  .delete('/:id', (req, res) => frameController.destroy(req, res));

export default route;
