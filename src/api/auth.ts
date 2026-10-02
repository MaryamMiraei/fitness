import api from "./axios";

export const signUp = async (
  email: string,
  password: string,
  userName: string,
) => {
  const response = await api.post("/auth/local", {
    email,
    password,
    userName,
  });

  return response.data;
};

export const signIn = async (email: string, password: string) => {
  const response = await api.post("/auth/local", {
    email,
    password,
  });

  return response.data;
};
