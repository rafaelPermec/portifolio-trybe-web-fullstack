import { Router } from 'express';

import * as userControllers from '../controllers/users.controllers';
import userMiddleware from '../middlewares/users.middlewares';

const router = Router();

router
  .post('/login', userControllers.login);

router
  .get('/', userControllers.getAll)
  .post('/', userMiddleware, userControllers.create);

router.get('/:id', userControllers.getById)
  .put('/:id', userMiddleware, userControllers.update)
  .delete('/:id', userControllers.remove);

export default router;
