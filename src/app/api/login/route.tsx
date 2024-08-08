import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { username } = await req.json();
        return NextResponse.json({ no: username, result: "success", success: true });
        
    } catch (error) {
        console.error("Fetch krte samay ka error:", error);
        return NextResponse.json({ status:200, no: "error", result: "error", success: false });
        
    }




    
}
