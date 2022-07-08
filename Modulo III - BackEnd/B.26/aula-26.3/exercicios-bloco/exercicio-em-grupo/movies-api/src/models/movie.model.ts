import { ResultSetHeader } from "mysql2";
import IMovie from "../interfaces/movie.interface";
import connection from "./connection";

const create = async (movie: IMovie): Promise<ResultSetHeader> => {
    const [ result ] = await connection.execute<ResultSetHeader>("INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?)",
    [movie.title, movie.directedBy, movie.releaseYear]);

    return result;
}

const getAll = async (): Promise<IMovie[]> => {
    const [rows] = await connection.execute(
        'SELECT * FROM movies',
    );
    return rows as IMovie[];
}

const getById = async (id: number): Promise<IMovie> => {
    const [rows] = await connection.execute(
        'SELECT * FROM movies WHERE id = ?', [id],
    );
    const [movie] = rows as IMovie[];
    return movie as IMovie;
}

const update = async (id:number, movie: IMovie): Promise<ResultSetHeader> => {
    const [ result ] = await connection.execute<ResultSetHeader>(
        "UPDATE movies SET title=?, directed_by=?, release_year=? WHERE id=?",
        [movie.title, movie.directedBy, movie.releaseYear, id]
      );
    
      return result;
}

const remove = async (id:number): Promise<void> => {
    await connection.execute(
        "DELETE FROM `movies-api`.movies WHERE id=?",
        [id]
      );
}


export default { create, getAll, getById, update, remove };