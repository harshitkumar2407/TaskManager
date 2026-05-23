import React, { useContext } from "react";
import { TaskContext } from "../task.context";
import { createTask, deleteTask, updateTask } from "../services/task.api";

const useTask = () => {
  const taskContext = useContext(TaskContext);

  const { tasksList, setTasksList } = taskContext;

  const handleAddTask = async (task, description, status, priority) => {
    const taskData = { task, description, status, priority };
    try {
      console.log("Adding task: ", taskData);
      const response = await createTask(taskData);
      setTasksList((prevTasks) => [...prevTasks, response]);
      return response;
    } catch (error) {
      console.error("Error adding task:", error);
      throw error;
    }
  };

  const handleUpdateTask = async (
    taskId,
    task,
    description,
    status,
    priority,
  ) => {
    const taskData = { task, description, status, priority };
    try {
      const response = await updateTask(taskId, taskData);
      setTasksList((prevTasks) =>
        prevTasks.map((existingTask) =>
          existingTask._id === taskId ? response : existingTask,
        ),
      );
      return response;
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await deleteTask(taskId);
      console.log("Deleted task:", taskId, response);
      setTasksList((prevTasks) =>
        prevTasks.filter((task) => task._id !== taskId),
      );
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  };

  return {
    tasksList,
    setTasksList,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
  };
};

export default useTask;
