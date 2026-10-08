import api from "./axios";

export const signin = async (identifier: string, password: string) => {
  const response = await api.post("/auth/local", {
    identifier,
    password,
  });
  localStorage.setItem("token", response.data.jwt);
  localStorage.setItem("username", response.data.user.username);
  console.log(response.data)

  return response.data;
};

export const signup = async (
  username: string,
  email: string,
  password: string,
) => {
  const response = await api.post("/auth/local/register", {
    username,
    email,
    password,
  });
  localStorage.setItem("token", response.data.jwt);
  // localStorage.setItem("username", response.data.user.username);

  return response.data;
};
