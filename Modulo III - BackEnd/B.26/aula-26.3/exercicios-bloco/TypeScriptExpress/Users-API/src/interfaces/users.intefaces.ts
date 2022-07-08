export interface iUserCredentials {
  email: string;
  password: string;
}

export interface iUser extends iUserCredentials {
  name: string;
}

export interface User extends iUser {
  id: number;
}
