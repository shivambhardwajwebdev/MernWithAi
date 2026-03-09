//MEthod 1
/**
 * const express = require('express')
 * const authRouter = express.Router()
 */
//Method 2
const {Router} = require('express')
const authControllers = require("../controllers/auth.controller")
const authRouter = Router()
const authMiddleware = require("../middleware/auth.middleware")

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

/**
 * @routes POST /api/auth/logout
 * @description clear  token from user cookie and add the token in blacklist
 * @access Public
 * */
authRouter.post("/logout",authControllers.logoutUserController)

/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get("/get-me",authMiddleware.authUser,authControllers.getMeController)
module.exports = authRouter