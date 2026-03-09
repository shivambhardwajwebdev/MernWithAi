//MEthod 1
/**
 * const express = require('express')
 * const authRouter = express.Router()
 */
//Method 2
const {Router} = require('express')
const authControllers = require("../controllers/auth.controller")
const authRouter = Router()

/**
 * @routes POST /api/auth/register
 * @description Register a new user
 * @access public
 * */
authRouter.post("/register",authControllers.regUserController)
/**
 * @routes POST /api/auth/login
 * @description login user with email and password
 * @access Public
 * */
authRouter.post("/login",authControllers.loginUserController)

module.exports = authRouter