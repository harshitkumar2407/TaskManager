import { useEffect, useContext } from "react";
import { BrowserRouter, Link } from "react-router-dom";

import "./App.scss";
import Button from "./UI/Button";

import AppRouter from "./AppRouter";
import { ThemeContext } from "./providers/ThemeProvider";
import { AuthContext } from "./features/auth/auth.context.js";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="brand">
            <span className="brand-mark">🗂️</span>
            <div>
              <p className="brand-title">Task Manager</p>
              <p className="brand-subtitle">Clean, fast and focused.</p>
            </div>
          </div>

          <nav className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="app-actions">
            <Button variant="ghost" onClick={toggleTheme}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
            {user ? (
              <Button variant="primary" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Button variant="primary" to="/login">
                Login
              </Button>
            )}
          </div>
        </header>

        <main className="app-content">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
