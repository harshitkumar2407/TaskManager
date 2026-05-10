import React,{useState} from 'react'
import useTasks from '../hooks/useTask'

// task,description,status,priority, userId

const Task = () => {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");
    const [priority, setPriority] = useState("medium");
    const { handleAddTask } = useTasks();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = { taskName, description, status, priority };
        console.log(task);
        
        
        try {
            await handleAddTask(taskName, description, status, priority);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="taskName">Task Name</label>
                <input type="text" id='taskName' name='taskName' placeholder='Task Name' required />

                <label htmlFor="description">Description</label>
                <textarea id='description' name='description' placeholder='Task Description'></textarea>

                <label htmlFor="status">Status</label>
                <select id='status' name='status'>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label htmlFor="priority">Priority</label>
                <select id='priority' name='priority'>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <button type='submit'>Add Task</button>
            </form>

    </>
  )
}

export default Task
