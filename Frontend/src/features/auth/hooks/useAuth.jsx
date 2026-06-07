import React, { useContext } from "react";
import { AuthContext } from "../auth.context.js";
import { registerUser, loginUser } from "../services/auth.api";

const useAuth = () => {
  const context = useContext(AuthContext);

  const { user, setUser, loading, setLoading } = context;

  const handleRegister = async (name, username, email, password) => {
    setLoading(true);

    try {
      const payload = { name, username, email, password };
      const response = await registerUser(payload);
      const userData = response.user || response.User;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      if (response.token) localStorage.setItem("token", response.token);

      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || "Something went wrong";

      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const payload = { email, password };
      const response = await loginUser(payload);
      const userData = response.user || response.User;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      if (response.token) localStorage.setItem("token", response.token);
      return { success: true };
    } catch (error) {
      console.error("Login failed:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Something went wrong",
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    setUser,
    loading,
    setLoading,
    handleRegister,
    handleLogin,
  };
};

export default useAuth;
