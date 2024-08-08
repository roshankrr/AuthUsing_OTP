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
    Otp:{
        type:Number,
        required:true
    },
    OtpExpire:{
        type:Date,
        default:Date.now()+300000
    },
    Password:{
        type:String,
        required:true
    },
    CPassword:{
        type:String,
        required:true
    },
},{timestamps:true})

export default mongoose.models.Users || mongoose.model("Users",UserSchema)