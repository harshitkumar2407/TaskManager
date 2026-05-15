import React,{useState} from 'react'
import useTasks from '../hooks/useTask'
import AddTask from '../UI/AddTask'
import { useContext } from 'react'
import { AuthContext } from '../../auth/auth.context'

// task,description,status,priority, userId

const Task = () => {
    
    
// on click of add task button, a form will open to add task details and on submit the task will be added to the list of tasks
    const [showForm, setShowForm] = useState(false);
    const { tasksList } = useTasks()

    return (
        <>
            <button onClick={() => setShowForm(!showForm)}>Add Task</button>

            {showForm && <AddTask />}
            <h1>Tasks List</h1>
            {tasksList.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <ul>
                    {tasksList.map((task) => (
                        <li key={task._id}>
                            <h3>{task.task}</h3>
                            <p>{task.description}</p>
                            <p>Status: {task.status}</p>
                            <p>Priority: {task.priority}</p>
                        </li>
                    ))}
                </ul>
            )}



    </>
  )
}

export default Task
