import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middleware/http.erro.middleware';
import routers from './routers';

const app = express();

app.use(express.json());
app.use(routers);
app.use(httpErrorMiddleware);

export default app;