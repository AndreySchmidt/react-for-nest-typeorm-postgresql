export interface IUserData {
  email: string;
  password: string;
}
export interface IResponseUser {
  email: string;
  password: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}
export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}

// mongoDB // im not using it here
// export interface IResponseUserData {
// email: string | undefined;
// password: string | undefined;
// createdAt: string | undefined;
// updatedAt: string | undefined;
// __v?: number | undefined;
// _id?: string | undefined;
// message: string | undefined;
// }
