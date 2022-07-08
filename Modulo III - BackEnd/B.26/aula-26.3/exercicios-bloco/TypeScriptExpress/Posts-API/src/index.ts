import express from 'express';
import postsRouter from './routes/posts.routes';
import errorMiddleware from './middlewares/error.middleware';

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/posts', postsRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
