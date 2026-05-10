import api from "./api";

const getAuthHeaders = () => {

  const token =
    localStorage.getItem("token");

  return {
    headers: {
      Authorization:
        `Bearer ${token}`,
    },
  };
};

export const depositMoney =
  async (amount: number) => {

  const response =
    await api.post(
      "/banking/deposit",
      {
        amount,
      },
      getAuthHeaders()
    );

  return response.data;
};

export const withdrawMoney =
  async (amount: number) => {

  const response =
    await api.post(
      "/banking/withdraw",
      {
        amount,
      },
      getAuthHeaders()
    );

  return response.data;
};

export const transferMoney =
  async (
    receiverEmail: string,
    amount: number
  ) => {

  const response =
    await api.post(
      "/banking/transfer",
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

  const response =
    await api.get(
      "/transaction/history",
      getAuthHeaders()
    );

  return response.data;
};