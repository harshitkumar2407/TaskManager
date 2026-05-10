import React,{useContext} from 'react'
import { TaskContext } from '../task.context'
import { createTask } from '../services/task.api'

const useTask = () => {
    const taskContext = useContext(TaskContext);

    const { tasksList, setTasksList } = taskContext

    const handleAddTask = async (taskName, description, status, priority) => {
        // setTasks([...tasks, task])
        try {
            console.log('Adding task: ', { taskName, description, status, priority });
            const response = await createTask({ taskName, description, status, priority });
            setTasksList([...tasksList, response]);
        } catch (error) {
            console.error('Error adding task:', error)
        }
    }
    return {
        tasksList,
        setTasksList,
        handleAddTask
    }
}

export default useTask