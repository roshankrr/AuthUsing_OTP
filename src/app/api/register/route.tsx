import { Database } from "@/database/db";
import Users from "@/Schema/UserSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, email, password, confirmPassword, phoneNumber, userName } = await req.json();

        await Database();

        const checkUser = await Users.findOne({ Phone: phoneNumber });

        if (checkUser) {
            return NextResponse.json({ status: 409, message: "User already exists" });
        }

        if (password !== confirmPassword) {
            return NextResponse.json({ status: 400, message: "Passwords do not match" });
        }

        const newUser = await Users.create({
            Name: name,
            Email: email,
            Password: password,
            Phone: phoneNumber,
            UserName: userName,
        });

        console.log("User created");
        return NextResponse.redirect("http://localhost:3000/profile");
    } catch (error) {
        console.log("Database register error", error);
        return NextResponse.json({ status: 500, message: "Internal Server Error" });
    }
}
