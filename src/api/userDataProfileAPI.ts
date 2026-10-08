/* Get current user */

import api from "./axios";

export const getMyProfile = async (): Promise<User> => {
  const response = await api.get("/users/me");

  return response.data;
};

/* Update current user */

export const updateMyProfile = async (
  userId: number,
  payload: Partial<UserPost>,
): Promise<User> => {
  const response = await api.put(`/users/${userId}`, payload);

  return response.data;
};

/* Delete current user */

export const deleteMyProfile = async (userId: number) => {
  const response = await api.delete(`/users/${userId}`);

  return response.data;
};

// /* Change password */

// export const changePassword = async (
//   currentPassword: string,
//   password: string,
//   passwordConfirmation: string,
// ) => {
//   const response = await api.post("/auth/change-password", {
//     currentPassword,
//     password,
//     passwordConfirmation,
//   });

//   return response.data;
// };
