import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();

router
  .get('/', booksController.getAll)
  .post('/', validationBook, booksController.create);

router
  .get('/:id', booksController.getById)
  .put('/:id', validationBook, booksController.update)
  .delete('/:id', booksController.delete);

export default router;
