import { Router } from "express";
import movieController from "./controllers/movie.controller";


const routers = Router();

routers.use("/movies", movieController);

export default routers;