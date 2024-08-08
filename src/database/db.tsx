import mongoose from "mongoose";

export async function Database(){
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Database connected");
        
    }
    catch(error){
        console.log("Database connection error",error);
    }

}