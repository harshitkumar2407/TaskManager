import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import ThemeProvider, { ThemeContext } from "./providers/ThemeProvider.jsx";
import TaskProvider from "./features/tasks/task.context.jsx";
import AuthProvider from "./features/auth/auth.context.jsx";


createRoot(document.getElementById("root")).render(
    
    <StrictMode>
        <AuthProvider>
            <ThemeProvider >
                <TaskProvider>
                    <App />
                </TaskProvider>
            </ThemeProvider>
        </AuthProvider>
    </StrictMode>,
);
