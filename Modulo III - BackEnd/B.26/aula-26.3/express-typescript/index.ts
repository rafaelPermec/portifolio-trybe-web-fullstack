import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import errorMiddleware from './src/middlewares/error.middleware';
import BookRoutes from './src/routes/books.routes';
import 'express-async-errors';

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send(`Express + TypesScript`)
});

app.use('/books', BookRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
