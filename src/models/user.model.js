const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: [true,"Username already taken"],//"" error when same username is mention,
        required: true
    },
    email:{
        required:true,
        type:String,
        unique:[true,"Account already exists with this email address"],
        requierd : true,
    },
    password:{
        type: String,
        required:true,
    }
})
const userModel = mongoose.model("users",userSchema)//users name ke collectifon mai user schema save karna hai 
module.exports = userModel;