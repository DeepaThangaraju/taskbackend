import mongoose from "mongoose";
import validator from "validator"

const jobSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"Please enter Work"]
    },
    mobile:{
        type:String,
        required:[true,"please enter mobile"]
    },
    jobType:{
        type:String,
    },
    profilePic:
        {
            type:String,
            default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"

    },
    email:{
        type:String,
        validate:{
          validator:validator.isEmail,
          message:"please Provide a valid email"
        },
        unique:true
    },
    dob:{
        type:Date
    },
    location:{
        type:String,
        default:"Chennai"
    },
})

export const jobModel=mongoose.model('jobdetails',jobSchema)