import { Router } from 'express';

import * as productController from '../controllers/products.controller';
import productMiddleware from '../middlewares/products.middleware';

const router = Router();

router
  .get('/price', productController.getAllByPriceRange);

router
  .get('/n-expired', productController.getAllNotExpired);

router
  .get('/', productController.getAll)
  .post('/', productMiddleware, productController.create);

router
  .get('/:id', productController.getById)
  .put('/:id', productMiddleware, productController.update)
  .delete('/:id', productController.remove);

export default router;
