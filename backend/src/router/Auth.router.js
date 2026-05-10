const express = require("express")
const { RegisterUser,LoginUser } = require("../controller/Auth.controller")

const AuthRouter = express.Router()

// app.use("/auth",AuthRouter)
/**
 * @route        POST /api/auth/register
 * @name         Register User
 * @description  Registring new user
 * @access       Public
 */
AuthRouter.post("/register",RegisterUser)

/**
 * @route        POST /api/auth/login
 * @name         Login User
 * @description  Login user and generate JWT token
 * @access       Public
 */
AuthRouter.post("/login",LoginUser)



module.exports = AuthRouter