import { iUserCredentials, iUser } from '../interfaces/users.intefaces';
import * as userModel from '../models/users.models';

const MESSAGES = {
  USER_NOT_FOUND: 'User not found',
  UNAUTHORIZED: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
};

export async function getAll() {
  const data = await userModel.getAll();
  return { status: 200, data };
}

export async function getById(id: number) {
  const data = await userModel.getById(id);

  if (data === null) return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  return { status: 200, data };
}

export async function create(user: iUser) {
  const userExists = await userModel.getByEmail(user.email);
  if (userExists) return { status: 400, error: { message: MESSAGES.USER_EXISTS } };

  const data = await userModel.create(user);
  return { status: 201, data };
}

export async function update(id: number, user: iUser) {
  const userExists = await userModel.getById(id);
  if (!userExists) return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };

  const data = await userModel.update(id, user);

  if (data === null) return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  return { status: 200, data };
}

export async function remove(id: number) {
  const data = await userModel.remove(id);

  if (data === null) return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  return { status: 200, data };
}

export async function login(iUserCredential: iUserCredentials) {
  const data = await userModel.getByEmail(iUserCredential.email);

  if (data === null || data.password !== iUserCredential.password) {
    return { status: 403, error: { message: MESSAGES.UNAUTHORIZED } };
  }
  return { status: 200, data: { token: 'fake token' } };
}
