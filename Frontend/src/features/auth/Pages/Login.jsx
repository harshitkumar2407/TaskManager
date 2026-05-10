import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import useAuth from '../hooks/useAuth'
import FormInput from '../UI/FormInput'


const Login = () => {
    const { handleLogin } = useAuth()
    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("Email:", email)
        console.log("Password:", Password)
        
       await  handleLogin(email, Password)

        
    }
   
    

  return (
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
  )
}

export default Login