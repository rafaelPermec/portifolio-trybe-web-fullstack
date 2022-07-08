import { Request, Response } from 'express';

import { iUserCredentials, iUser } from '../interfaces/users.intefaces';
import * as userService from '../services/users.services';

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await userService.getAll();
  res.status(status).json(data);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const { status, data, error } = await userService.getById(Number(id));

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const user = req.body as iUser;
  const { status, data, error } = await userService.create(user);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const user = req.body as iUser;

  const { status, data, error } = await userService.update(Number(id), user);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;
  const { status, data, error } = await userService.remove(Number(id));

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function login(req: Request, res: Response) {
  const userCredentials = req.body as iUserCredentials;
  const { status, data, error } = await userService.login(userCredentials);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}
