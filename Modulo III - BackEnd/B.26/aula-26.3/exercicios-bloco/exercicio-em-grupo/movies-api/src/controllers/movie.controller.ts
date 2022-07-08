import { Request, Response, Router } from "express";
import movieService from '../services/movie.service';

const movieController = Router();

movieController.post("/", async (req: Request, res: Response): Promise<Response> => {
    const movies = await movieService.newMovie(req.body);
    return res.status(200).json(movies);
})

movieController.get("/", async (req: Request, res: Response): Promise<Response> => {
    const movies = await movieService.getMovies();

    return res.status(200).json(movies);
})

movieController.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const movies = await movieService.getMovieById(id);

    return res.status(200).json(movies);
})

movieController.put("/:id", async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const movie = await movieService.updateMovie(id, req.body);

    return res.status(201).json(movie);
})

movieController.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const movie = await movieService.removeMovie(id);

    return res.status(201).json({message: 'Registro removido com sucesso'});
})


export default movieController;