import IMovie from "../interfaces/movie.interface";
import movieModel from "../models/movie.model";
import HttpException from "../shared/http.exeception";

const isValid = (movie: IMovie) => {
    if (!movie.title || typeof movie.title !== "string") return false;
    if (!movie.releaseYear || typeof movie.releaseYear !== "number") return false;
    if (!movie.directedBy || typeof movie.directedBy !== "string") return false;
  
    return true;
  };

const newMovie = async ( movie: IMovie ): Promise<IMovie> => {
    if (!isValid(movie)) {
        throw new HttpException(400, "Dados inválidos!");
    }
    const { insertId } = await movieModel.create(movie);
    movie.id = insertId;
    return movie;
}

const getMovies = (): Promise<IMovie[]> => {
    return movieModel.getAll();
}


const getMovieById = (id: number): Promise<IMovie> => {
    return movieModel.getById(id);
}

const updateMovie = async (id:number, movie: IMovie): Promise<IMovie> => {
    if (!isValid(movie)) {
        throw new HttpException(400, "Dados inválidos");
    }
    const { insertId } = await movieModel.update(id, movie);
    movie.id = insertId;

    return movie
}

const removeMovie = async (id:number): Promise<void> => {
    await movieModel.remove(id);
}

export default { newMovie, getMovies, getMovieById, updateMovie, removeMovie };