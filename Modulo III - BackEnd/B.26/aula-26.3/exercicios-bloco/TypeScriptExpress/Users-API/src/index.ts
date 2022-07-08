import express from 'express';
import userRoutes from './routes/users.routes';
import errorMiddleware from './middlewares/error.middlewares';

require('dotenv').config();

const app = express();

const { PORT } = process.env;

app.use(express.json());

app.use('/users', userRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening in: http://localhost:${PORT}`));
