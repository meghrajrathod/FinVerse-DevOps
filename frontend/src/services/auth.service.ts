import api from "./api";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

export const loginUser = async (
  data: LoginData
) => {

  const response = await api.post(
    "/Auth/login",
    data
  );

  return response.data;
};

export const registerUser = async (
  data: RegisterData
) => {

  const response = await api.post(
    "/Auth/register",
    data
  );

  return response.data;
};