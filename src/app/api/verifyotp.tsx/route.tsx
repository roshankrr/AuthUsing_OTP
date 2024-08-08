import { Database } from "@/database/db";
import { NextRequest, NextResponse } from "next/server";
import Otp from "@/Schema/otp.Schema"
export async function POST(req:NextRequest,res:NextResponse){
    const {name,phNo,otp}=await req.json()
    console.log(name,phNo,otp)
    try {
        await Database();
        const otpData=await Otp.findOne({Phone:phNo})
        if(otpData){
            if(otp===otpData.Otp){
                return NextResponse.json({name:name,status:200,message:"OTP verified successfully"})
            }
            else{
                return NextResponse.json({status:500,message:"OTP verification failed"})
            }
        }
    } catch (error) {
        console.error("OTP verification error:",error);
        return NextResponse.json({status:500,message:"OTP verification error"})
        
    }
}