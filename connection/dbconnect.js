import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

var MONGO_URL=process.env.MONGO_URL;

export const connectDB=async(MONGO_URL)=>{
    try{
        const con=await mongoose.connect(MONGO_URL, {useNewUrlParser: true});
        console.log("DB connceted")
    }catch(error){
       console.error(error.message)
       process.exit(1)
    }
}