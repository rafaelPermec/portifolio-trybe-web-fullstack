import { NextFunction, Request, Response } from "express";
import HttpException from "../shared/http.exeception";

const httpErrorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("httpErrorMiddleware")
    const { status, message } = err as HttpException;
    res.status(status || 500).json( { message } );
}

export default httpErrorMiddleware;