
import React,{createContext, useState} from 'react'


export const TaskContext = React.createContext()

const TaskProvider = ({ children }) => {
    const [tasksList, setTasksList] = React.useState([])

  return (
    <TaskContext.Provider value={{ tasksList, setTasksList }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider