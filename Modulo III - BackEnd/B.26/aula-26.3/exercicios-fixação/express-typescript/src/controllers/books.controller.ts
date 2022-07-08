import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BookService from '../services/books.service';

class BooksController {
  constructor(private bookService = new BookService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = await this.bookService.geById(parseInt(id));

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Book not found!' });
    }

    res.status(StatusCodes.OK).json(book);
  };

  public create = async (req: Request, res: Response) => {
    const book = req.body;

    const bookCreated = await this.bookService.create(book);
    res.status(StatusCodes.OK).json(bookCreated);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = req.body;
    await this.bookService.update(parseInt(id), book);

    res.status(StatusCodes.NO_CONTENT).end();
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.bookService.delete(parseInt(id));

    res.status(StatusCodes.OK).json({ message: `Book deleted successfully` });
  };

}

export default BooksController;
