import mongoose from "mongoose";

const OtpSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
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
    }
},{timestamps:true})

export default mongoose.models.Otp || mongoose.model("Otp",OtpSchema)