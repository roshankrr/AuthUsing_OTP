"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
    const [showOTP, setShowOTP] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [otp, setOtp] = useState("")
    const [verify, setVerify] = useState(false)
    



    const handleSubmit = async () => {
        
        try {
            const res = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                body: JSON.stringify({ name, email, password, confirmPassword, phoneNumber, userName })
            })
            if(res.status === 200){
                console.log("User created successfully");
            }
            
        } catch (error) {
            console.error("Fetch error:", error);
            
        }
        }



    const handleOTP=async()=>{
        if(showOTP){
            try {
                const res = await fetch("http://localhost:3000/api/verifyotp", {
                    method: "POST",
                    body: JSON.stringify({phNo:phoneNumber,name:name,otp:otp})
                })
                if(res.status === 200){
                    setVerify(true)
                    
                }
                else{
                    throw new Error("Please fill the details");
                }
                
            } catch (error) {
                console.error("OTP fetch error:", error);
                
            }
            
        }
        else{
            try {
                const res = await fetch("http://localhost:3000/api/otp", {
                    method: "POST",
                    body: JSON.stringify({phNo:phoneNumber,name:name})
                })
                if(res.status === 200){
                    setShowOTP(true)
                }
                else{
                    throw new Error("Please fill the details");
                }
                
            } catch (error) {
                console.error("OTP fetch error:", error);
                
            }

        }
        
    }



    return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-zinc-900 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white text-foreground">Register</h2>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/" className="font-medium text-zinc-300 hover:text-zinc-300/50" prefetch={false}>
                            Login
                        </Link>
                    </p>
                </div>

                    <div>
                        <Label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                            Name
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="username" className="block text-sm font-medium text-muted-foreground">
                            Username
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="username"
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Enter your username"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                            Email
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
                            Password
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="confirm-password" className="block text-sm font-medium text-muted-foreground">
                            Confirm Password
                        </Label>
                        <div className="mt-1">
                            <Input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">
                            Phone Number
                        </Label>
                        <div className="mt-1">
                            <div>
                                <div>
                                    <div className="flex h-full items-center px-3 text-muted-foreground">+91</div>
                                </div>
                                <div className="flex gap-3">
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Ph No"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 pl-4 pr-3 text-gray-900 ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    
                                />
                                <Button className={`text-2xl bg-transparent ${verify?"block":"hidden"} hover:bg-transparent pointer-events-none`}>✅</Button>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    {showOTP && (
                        <div>
                            <Label htmlFor="otp" className="block text-sm font-medium text-muted-foreground">
                                One Time Password (OTP)
                            </Label>
                            <div className="mt-1 text-black">
                                <Input maxLength={6} onChange={(e) => setOtp(e.target.value)} value={otp}/>
                            </div>
                        </div>
                    )}
                    <Button type="button" className={`${verify?"hidden":"block"}`} onClick={handleOTP}>{showOTP ? "Submit" : "Send OTP"}</Button>

                    <div>
                        <Button
                            onClick={handleSubmit}
                            className={`flex w-full ${verify?"pointer-events-auto":"pointer-events-none"} justify-center rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-zinc-600/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
                        >
                            Register
                        </Button>
                    </div>
            </div>
        </div>
    )
}