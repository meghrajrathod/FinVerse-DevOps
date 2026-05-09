import axios from "axios";

const api = axios.create({
  baseURL: "https://api.meghrajrathod.cloud/api",
});

export default api;