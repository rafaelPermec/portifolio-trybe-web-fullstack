import express from 'express';

import productsRoute from './routes/products.routes';
import errorMiddleware from './middlewares/error.middleware';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/products', productsRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
