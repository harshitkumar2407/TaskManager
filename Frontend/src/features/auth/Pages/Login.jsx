import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import FormInput from "../UI/FormInput";
import Button from "../../../UI/Button";

const Login = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handleLogin(email, password);
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
          <h1>Login</h1>
          <p className="page-description">
            Sign in and manage your tasks with a clean, simple workflow.
          </p>

          <form onSubmit={handleSubmit}>
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
            <Button type="submit">Login</Button>
          </form>

          <p>
            Don&apos;t have an account?{" "}
            <Link to="/register">Register here</Link>
          </p>

          {error && <div className="alert">{error}</div>}
        </div>
      </div>
    </section>
  );
};

export default Login;
