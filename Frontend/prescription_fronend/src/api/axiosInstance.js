import axios from "axios";
import { getToken } from "../utils/auth";

const API_BASE = "http://localhost:8080/api/auth";

const instance = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// add interceptor to include token
instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
