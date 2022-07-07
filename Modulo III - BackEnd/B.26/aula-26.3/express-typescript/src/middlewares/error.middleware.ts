import { NextFunction, Request, Response } from 'express';

function errorMiddleware(err: Error, _req: Request, res: Response, next: NextFunction) {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;

    case 'NotFoundError':
      res.status(404).json({ message });
      break;

    case 'ConflictError':
      res.status(409).json({ message });
      break;

    default:
      console.log(err);
      res.sendStatus(500);
  }

  next();

}

export default errorMiddleware;
