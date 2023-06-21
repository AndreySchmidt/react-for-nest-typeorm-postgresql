import { instance } from "../api/axios.api";
import { IResponseUserData, IUser, IUserData } from "../types/types";

export const AuthService = {
  async registration(
    userData: IUserData
  ): Promise<IResponseUserData | undefined> {
    const { data } = await instance.post<IResponseUserData>("user", userData);
    // const { data } = await instance.post<IUserData, {data: IResponseUserData}>("user", userData);
    return data;
  },
  async login(userData: IUserData): Promise<IUser> {},
  async getMe() {},
};
