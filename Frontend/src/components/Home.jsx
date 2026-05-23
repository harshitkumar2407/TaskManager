import React, { useContext } from "react";
import { AuthContext } from "../features/auth/auth.context.js";
import Button from "../UI/Button";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="page-section">
      <div className="page-card hero-grid">
        <div>
          <span className="eyebrow">Organize your day</span>
          <h1>Focus on what matters and finish more each day.</h1>
          <p className="page-description">
            Task Manager helps you capture deadlines, prioritize work, and track
            progress with a clean, modern interface.
          </p>
          <div className="hero-cta">
            {user ? (
              <Button variant="primary" to="/tasks">
                View my tasks
              </Button>
            ) : (
              <>
                <Button variant="primary" to="/login">
                  Login
                </Button>
                <Button variant="ghost" to="/register">
                  Create account
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="section-card">
          <h2>Hello {user?.name || "Guest"}</h2>
          <p>
            {user
              ? `You are logged in as ${user.email}. Start adding tasks to stay focused and productive.`
              : "Sign in to get a beautiful task dashboard, quick add features, and a clean workspace for your day."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
