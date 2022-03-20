import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./connection/dbconnect.js";
import { jobRouter } from "./routes/jobRoutes.js";

import cors from "cors"

const app=express();
dotenv.config()
connectDB()
app.use(express.json())
app.use(cors())
app.set("view engine", "ejs");
const PORT=process.env.PORT || 9000;



app.get("/",(req,res)=>{
    res.send("Hello World!!")
})

app.use("/api/job",jobRouter)

app.listen(PORT,()=>console.log("App started in", PORT))