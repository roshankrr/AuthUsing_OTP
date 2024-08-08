import { Database } from "@/database/db";
import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";
import Otp from "@/Schema/otp.Schema"

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(req:NextRequest,res:NextResponse) {
    const {phNo,name} = await req.json();
    try {
        var otp = Math.floor(100000 + Math.random()*900000);


        await Database();
        await Otp.create({
            Name:name,
            Phone:phNo,
            Otp:otp,
            OtpExpire:new Date(Date.now()+300000)
        })

        const phoneNumber = `+91${phNo}`;
        const message = await client.messages.create({
            body: `Your OTP for verification is ${otp} Got it ${name}?😎`,
            from: "+18576889679",
            to: phoneNumber,
        });
        console.log("OTP sent successfully", message.sid);
        return NextResponse.json({ status: 200, message: "OTP sent successfully" })
        
    } catch (error) {
        console.error("OTP fetch error:", error);
        return NextResponse.json({ status: 500, message: "OTP fetch error" })

        
    }

    
    
}