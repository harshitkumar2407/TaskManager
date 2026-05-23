import React, { useEffect, useState } from "react";
import { AuthContext } from "./auth.context.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
