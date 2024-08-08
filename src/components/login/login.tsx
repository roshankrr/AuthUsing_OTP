"use client"

import { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
    const [showOTP, setShowOTP] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleSubmit = async () => {// Prevent the default button behavior
        console.log("Submit button clicked",phoneNumber);

        try {
            const res = await fetch("http://localhost:3000/api/login", { // Use absolute URL
                method: "POST",
                body: JSON.stringify({ username: phoneNumber }), 
            });
            if(res.status === 200){
                setShowOTP(true);
            }
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await res.json();
            console.log("Response data:", data);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };


    return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-zinc-900 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white text-foreground">Login</h2>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                        Not registered?{" "}
                        <Link href="/register" className="font-medium text-zinc-300 hover:text-zinc-300/50" prefetch={false}>
                            Sign up
                        </Link>
                    </p>
                </div>
                <div className="space-y-6">
                    <div>
                        <Label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">
                            Phone Number
                        </Label>
                        <div className="mt-1">
                            <div className="flex h-full items-center px-3 text-muted-foreground">+91</div>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="Ph no"
                                required
                                value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 pl-5 pr-3 text-gray-900 ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {showOTP && (
                        <div>
                            <Label htmlFor="otp" className="block text-sm font-medium text-muted-foreground">
                                One Time Password (OTP)
                            </Label>
                            <div className="mt-1">
                                <Input
                                    id="otp"
                                    type="text"
                                    placeholder="Enter OTP"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    )}
                    <div>
                        <Button
                            onClick={handleSubmit}
                            className="flex w-full justify-center rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-zinc-600/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            {showOTP ? "Login" : "Send OTP"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
