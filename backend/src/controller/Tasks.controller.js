const TaskModel = require("../model/Task.model")


async function AddTask(req,res) {
    const {task,description,status,priority} = req.body
    const userId = req.user.id

    try {
        const newTask = new TaskModel({
            task,
            description,
            status,
            priority,
            userId
        })
        await newTask.save()
        res.status(201).json({message:"New Task is added",Task:newTask})
    } catch (error) {
        res.status(500).json({ message: "Error adding task", error: error.message })
    }
}

async function removeTask(req,res) {
    const {id} = req.params
    const userId = req.user.id

    try {
        const task = await TaskModel.findOneAndDelete({_id:id,userId})
        if (!task) {
            res.status(404).json({message:"Task not found"})
        }
        res.status(200).json({message:"Task is removed",Task:task})
    } catch (error) {
        res.status(500).json({ message: "Error removing task", error: error.message })
    }
    
}

async function updateTask(req,res) {
    const {id} = req.params
    const {task,description,status,priority} = req.body
    const userId = req.user.id

    try {
        const updatedTask = await TaskModel.findOneAndUpdate(
            {_id:id,userId},
            {task,description,status,priority},
            {new:true}
        )
        if (!updatedTask) {
            res.status(404).json({message:"Task not found"})
        }
        res.status(200).json({message:"Task is updated",Task:updatedTask})
    } catch (error) {
        res.status(500).json({ message: "Error updating task", error: error.message })
    }
}

async function getTasks(req,res) {
    const userId = req.user.id

    try {
        const tasks = await TaskModel.find({userId})
        res.status(200).json({message:"Tasks retrieved successfully",Tasks:tasks})
    } catch (error) {
        res.status(500).json({ message: "Error retrieving tasks", error: error.message })
    }
}


module.exports = {
    AddTask,
    removeTask,
    updateTask,
    getTasks
}  