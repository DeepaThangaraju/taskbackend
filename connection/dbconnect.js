import mongoose from "mongoose";

export const connectDB=async()=>{
    try{
        const con=await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connceted")
    }catch(error){
       console.error(error.message)
       process.exit(1)
    }
}