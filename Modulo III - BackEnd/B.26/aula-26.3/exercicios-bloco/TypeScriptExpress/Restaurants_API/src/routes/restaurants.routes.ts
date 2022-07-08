import { Router } from 'express';

import * as restaurantController from '../controllers/restaurants.cotroller';
import restaurantMiddleware from '../middlewares/restaurants.middleware';

const router = Router();

router
  .get('/open', restaurantController.getAllOpen);

router
  .get('/', restaurantController.getAll)
  .post('/', restaurantMiddleware, restaurantController.create);

router.put('/:id', restaurantMiddleware, restaurantController.update)
  .get('/:id', restaurantController.getById)
  .delete('/:id', restaurantController.remove);



export default router;