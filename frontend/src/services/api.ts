import axios from "axios";

const api = axios.create({
  baseURL: "http://api.meghrajrathod.cloud/api",
});

export default api;