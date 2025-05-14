import axios from "axios";

const BASE_URL = `${process.env.NEXT_BACKEND_URL}/api`;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
