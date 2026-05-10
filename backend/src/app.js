require("dotenv").config()
const express = require("express");
const cors = require("cors");
const AuthRouter = require("./router/Auth.router");
const TaskRouter = require("./router/Task.router");
const cookieParser = require("cookie-parser")


const app = express()
app.use(cookieParser())
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5175",
    "http://localhost:5174",
    process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
    credentials: true,
    origin: allowedOrigins
}))
app.use(express.json())

app.use("/api/auth",AuthRouter)
app.use("/api/task",TaskRouter)



// app.post("/task", async(req,res)=>{
//     const {task,Status} = req.body;
//     const Task = new UserModel({ task, Status });
//     await Task.save()
//     res.status(200).json({
//         Meassage: "data is updated",
//         Task
//     })
// })
// app.use("/task",TaskRouter)


app.get("/",(req,res)=>{
    res.status(200).json({message:"Welcome to Task Manager API"})
})

app.use((req, res) => {
    res.status(404).json({ message: "Route Not Found" })
})

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ message: "Internal Server Error", error: err.message })
})

module.exports = app
