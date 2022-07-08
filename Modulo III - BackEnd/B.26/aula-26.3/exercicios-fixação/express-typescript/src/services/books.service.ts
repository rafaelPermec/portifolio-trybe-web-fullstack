import connection from "../models/connection";
import BookModel from "../models/books.model";
import Book from "../interfaces/book.interface";
import { NotFoundError } from "restify-errors";

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async geById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  public async create(book: Book): Promise<Book> {
    return this.model.create(book);
  }

  public async update(id: number, book: Book): Promise<void> {
    const bookFound = await this.model.getById(id);
    if (!bookFound) throw new NotFoundError('NotFoundError');

    return this.model.update(id, book);
  }

  public async delete(id: number): Promise<void> {
    const bookFound = await this.model.getById(id);

    if (!bookFound) throw new NotFoundError('NotfoundError');

    this.model.delete(id);
  }

}

export default BookService;
