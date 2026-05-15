import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import useAuth from '../hooks/useAuth'
import FormInput from '../UI/FormInput'
import { Navigate } from 'react-router'
import { useNavigate } from 'react-router'


const Login = () => {
    const { handleLogin } = useAuth()
    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("Email:", email)
        console.log("Password:", Password)
        
        const result = await  handleLogin(email, Password)
        if (!result.success) {
            // Handle login failure
            console.error("Login failed:", result.message);
            setError(result.message);
        }
        else {
            navigate("/home")
        }
        
    }
   
    

  return (
    <>
    <div className='auth-container'>
        <h1>Login</h1>


        <form onSubmit={handleSubmit}> 
            <div>
                
                <FormInput label="Email:" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <FormInput label="Password:" type="password" id="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
    //error handling and loading state can be added later
    <p>{error}</p>
  </>
    )
}

export default Login