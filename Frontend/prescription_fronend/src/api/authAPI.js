import axios from "./axiosInstance";
import plainAxios from "axios"; // for login/register which don't require interceptor (but here base matches too)

const BASE = "http://localhost:8080/api/auth";

export const registerUser = (user) => {
  // backend expects User object
  return plainAxios.post(`${BASE}/register`, user);
};

export const loginUser = (credentials) => {
  // returns { token: "..." } JSON string or object
  return plainAxios.post(`${BASE}/login`, credentials);
};
