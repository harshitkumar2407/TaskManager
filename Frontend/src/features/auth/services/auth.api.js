import axios from "axios";

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  "https://taskmanager-1-30xf.onrender.com";

const api = axios.create({
  baseURL: `${BACKEND_URL}/api/auth`,
  withCredentials: true,
});

export const registerUser = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post("/login", userData);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/logout");
  return response.data;
};

export default api;