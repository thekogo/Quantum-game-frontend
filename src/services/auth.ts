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

export const getUser = () => {};
