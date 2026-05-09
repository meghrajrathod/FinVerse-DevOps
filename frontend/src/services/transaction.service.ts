import api from "./api";

import Cookies from "js-cookie";

const getAuthHeaders = () => {

  const token = Cookies.get("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const depositMoney = async (
  amount: number
) => {

  const response = await api.post(
    "/transaction/deposit",
    {
      amount,
    },
    getAuthHeaders()
  );

  return response.data;
};

export const withdrawMoney = async (
  amount: number
) => {

  const response = await api.post(
    "/transaction/withdraw",
    {
      amount,
    },
    getAuthHeaders()
  );

  return response.data;
};

export const transferMoney = async (
  receiverEmail: string,
  amount: number
) => {

  const response = await api.post(
    "/transaction/transfer",
    {
      receiverEmail,
      amount,
    },
    getAuthHeaders()
  );

  return response.data;
};

export const getTransactionHistory =
  async () => {

    const response = await api.get(
      "/transaction/history",
      getAuthHeaders()
    );

    return response.data;
  };