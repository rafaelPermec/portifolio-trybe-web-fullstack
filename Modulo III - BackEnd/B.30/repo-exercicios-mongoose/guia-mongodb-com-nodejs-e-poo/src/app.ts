import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import FrameRoutes from './routes/frame.routes';
import LensRoutes from './routes/lens.routes';

const app = express();
app.use(express.json());

app.use('/frame', FrameRoutes);
app.use('/lens', LensRoutes);

app.use(errorHandler);

export default app;
