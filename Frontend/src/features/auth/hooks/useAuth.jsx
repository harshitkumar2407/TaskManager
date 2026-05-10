import React, { useContext } from "react";
import { AuthContext } from "../auth.context";
import { registerUser } from "../services/auth.api";


const useAuth = () => {
  const context = useContext(AuthContext);

  const { user, setUser, loading, setLoading } = context;

    const handleRegister = async (name, email, password) => {
      setLoading(true);
        
      try {
          const response = await registerUser(name, email, password);
          setUser(response.user);

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
      const response = await loginUser(email, password);
      console.log("Login successful:", response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Login failed:", error);
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
