import axios from "axios";
// // shotcut so we dont have to write the full url every time we want to make 
const api = axios.create({
    baseURL: 'http://localhost:3000/api/auth'
})


export const registerUser = async (name, email, password) => {
    try {
        const response = await api.post('/register', {
            name,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }


};

export const loginUser = async (email, password) => {
    try {
        const response = await api.post('/login', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};