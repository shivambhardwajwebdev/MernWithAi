const express = require("express");
const app =express();
app.use(express.json())
//middleware for cookies
const cookieParser = require("cookie-parser")
/* require all the outes here */
const authRouter=require("./routes/auth.routes")
//using cookie-parser
app.use(cookieParser())
/* using all the routes here*/
app.use("/api/auth",authRouter)

module.exports=app