import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import ThemeProvider, { ThemeContext } from "./providers/ThemeProvider.jsx";
import TaskProvider from "./features/tasks/task.context.jsx";


createRoot(document.getElementById("root")).render(
    
    <StrictMode>
        <ThemeProvider >
            <TaskProvider>
                <App />
            </TaskProvider>
        </ThemeProvider>
    </StrictMode>,
);
