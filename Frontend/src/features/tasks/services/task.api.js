import axios from "axios";
import { AuthContext } from "../../auth/auth.context.js";

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "https://taskmanager-1-30xf.onrender.com";
const api = axios.create({
  baseURL: `${BACKEND_URL}/api/task`,
  withCredentials: true,
});

// Add token from context to request headers
api.interceptors.request.use((config) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && localStorage.getItem("token")) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
  } catch (e) {
    console.log("No token in localStorage");
  }
  return config;
});

export const createTask = async (taskData) => {
  try {
    // Normalize priority to lowercase for backend compatibility
    const normalizedData = {
      ...taskData,
      priority: taskData.priority.toLowerCase(),
    };
    console.log("createTask payload:", normalizedData);
    const response = await api.post("/add", normalizedData);
    return response.data.Task || response.data;
  } catch (error) {
    console.log("Add Task Error:  ", error);
    throw error;
  }
};
// get all tasks for a user
export const getTasks = async (userId) => {
  try {
    const response = await api.get(`/get/users/${userId}`);
    return response.data.Tasks || [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const updateTask = async (taskId, taskData) => {
  try {
    const normalizedData = {
      ...taskData,
      priority: taskData.priority.toLowerCase(),
    };
    const response = await api.put(`/update/${taskId}`, normalizedData);
    return response.data.Task || response.data;
  } catch (error) {
    console.log("Update Task Error:  ", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    console.log("deleteTask id:", taskId);
    const response = await api.delete(`/delete/${taskId}`);
    return response.data;
  } catch (error) {
    console.log("Delete Task Error:  ", error);
    throw error;
  }
};
