import express from 'express';
import restaurantRoute from './routes/restaurants.routes';
import errorMiddleware from './middlewares/error.middleware';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/restaurants', restaurantRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
