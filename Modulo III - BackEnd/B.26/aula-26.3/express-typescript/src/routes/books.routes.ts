import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

router.get('/', booksController.getAll);

router.get('/:id', booksController.getById);

export default router;
