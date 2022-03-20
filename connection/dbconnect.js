import mongoose from "mongoose";

export const connectDB=async(url)=>{
    try{
        const con=await mongoose.connect(url);
        console.log("DB connceted")
    }catch(error){
       console.error(error.message)
       process.exit(1)
    }
}