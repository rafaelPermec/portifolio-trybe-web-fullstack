import { Router } from 'express';
import * as postControllers from '../controllers/posts.controller';
import postMiddleware from '../middlewares/posts.middleware';

const postsRouter = Router();

postsRouter
  .get('/search', postControllers.getAllBySearchTerm);

postsRouter
  .get('/', postControllers.getAll)
  .post('/', postMiddleware, postControllers.create);

postsRouter
  .get('/:id', postControllers.getById)
  .put('/:id', postMiddleware, postControllers.update)
  .delete('/:id', postControllers.remove);

export default postsRouter;
