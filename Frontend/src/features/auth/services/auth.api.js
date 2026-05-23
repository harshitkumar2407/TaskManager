import axios from "axios";
// shortcut so we dont have to write the full url every time we want to make
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const api = axios.create({
  baseURL: `${BACKEND_URL}/api/auth`,
  withCredentials: true,
});

export const registerUser = async (name, username, email, password) => {
  try {
    const response = await api.post("/register", {
      name,
      username,
      email,
      password,
    });
    // Store token in localStorage for future requests
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });
    // Store token in localStorage for future requests
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
