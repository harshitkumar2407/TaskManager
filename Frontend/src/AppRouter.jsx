import React from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Login from './features/auth/Pages/Login.jsx'
import Register from './features/auth/Pages/Register.jsx'
import AuthProvider from './features/auth/auth.context.jsx'
import Task from './features/tasks/Pages/Task.jsx'

const AppRouter = () => {


    return (
        <BrowserRouter>

            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/tasks" element={<Task />} /> 
                    <Route path="/task" element={<Task />} /> 
                    <Route path="/*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRouter
