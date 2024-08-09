import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        // required:true,
        unique:true,
    },
    UserName:{
        type:String,
        // required:true,
        unique:true
    },
    Phone:{
        type:Number,
        required:true,
        unique:true
    },

    Password:{
        type:String,
        required:true
    },
},{timestamps:true})

export default mongoose.models.Users || mongoose.model("Users",UserSchema)