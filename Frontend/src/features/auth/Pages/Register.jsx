import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import FormInput from "../UI/FormInput";
import Button from "../../../UI/Button";

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

    const result = await handleRegister(name, username, email, password);
    if (!result.success) {
      setError(result.message);
    } else {
      setError("");
      navigate("/home");
    }
  };

  return (
    <section className="page-section">
      <div className="auth-container">
        <div className="page-card">
          <h1>Create an account</h1>
          <p className="page-description">
            Start managing tasks with a polished workflow and quick add
            experience.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <FormInput
                label="Name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-row">
              <FormInput
                label="Username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-row">
              <FormInput
                label="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-row">
              <FormInput
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit">Register</Button>
          </form>

          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>

          {error && <div className="alert">{error}</div>}
        </div>
      </div>
    </section>
  );
};

export default Register;
