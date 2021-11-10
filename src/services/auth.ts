import { IUser } from "../interface/user";
import client from "../utils/api";

export const login = (email: string, password: string): Promise<boolean> => {
  return client
    .post("auth/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      return true;
    })
    .catch((err) => {
      localStorage.removeItem("access_token");
      return false;
    });
};

export const getUser = (): Promise<IUser> => {
  return client
    .get("auth/me", {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("access_token"),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      localStorage.removeItem("access_token");
    });
};
