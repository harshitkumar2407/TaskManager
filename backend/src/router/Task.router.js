const express = require("express")
const { AddTask ,removeTask, updateTask, getTasks} = require("../controller/Tasks.controller.js")
const authMiddleware = require("../middleware/Auth.middleware")

const TaskRouter = express.Router()


// Route for adding a new task is http://localhost:3000/task/add
TaskRouter.post("/add",authMiddleware,AddTask)
TaskRouter.delete("/delete/:id",authMiddleware,removeTask)
TaskRouter.put("/update/:id",authMiddleware,updateTask)   
TaskRouter.get("/get/users/:id",authMiddleware,getTasks) 


module.exports = TaskRouter

