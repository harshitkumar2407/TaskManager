import React from 'react'
import { useState } from 'react'
import useTasks from '../hooks/useTask'

//  task, description, status, priority, userId
const AddTask = () => {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("Pending")
  const [priority, setPriority] = useState("medium")

  const { handleAddTask } = useTasks()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const taskData = { task, description, status, priority }
    console.log(taskData)
    // Call the API to add the task
    try {
      await handleAddTask(task, description, status, priority)
      // Clear the form after successful submission
      setTask("")
      setDescription("")
      setStatus("Pending")
      setPriority("medium")
    } catch (error) {
      console.error("Error adding task:", error)
    }
  }

  return (
    <>
    <h1>Add Task</h1>
    <form   >
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

export default AddTask