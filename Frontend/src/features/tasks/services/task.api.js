import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:3000/api/task"
})
// taskName, description, status, priority
export const createTask = async (taskName, description, status, priority) => {
    try {
        console.log(taskName, description, status, priority);
        
        const response = await api.post('/add',{
            taskName, description, status, priority });
        return response.data;
    } catch (error) {
        console.log('Add Task Error:  ', error);
        throw error
    }
};