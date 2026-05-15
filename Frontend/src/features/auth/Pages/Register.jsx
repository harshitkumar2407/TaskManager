import React from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import FormInput from "../UI/FormInput";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

const Register = () => {
  const { handleRegister } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userData = {name, username, email, password};
    console.log("Name:", name, "Username:", username, "Email:", email, "Password:", password);

    const result = await handleRegister(name, username, email, password);
    console.log("Registration response:", result);

    if (!result.success) {
    setError(result.message);
    
    } else {
    setError("");
      // return <Navigate to="/home" />;
      navigate("/home");
    }

  };

  return (
    <div className="auth-container">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <FormInput
            label="Name:"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div>
          <FormInput
            label="Username:"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <FormInput
            label="Email:"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <FormInput
            label="Password:"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        if you already have an account, <a href="/login">login here</a>
      </p>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Register;
