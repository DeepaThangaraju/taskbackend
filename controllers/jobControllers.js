import { jobModel } from "../model/jobModel.js"

const createJob=async(req,res)=>{
    const {fullName,mobile,jobType,profilePic,email,dob,location} =req.body
    try{
        const job=await jobModel.findOne({email})
        if(job){
            throw new Error("user already exist")
        }
        const newJob={
            fullName,
            mobile,
            jobType,
            profilePic,
            email,
            dob,
            location
        }
        const createdJob=await jobModel.create(newJob)
        res.status(200).json({createdJob})

    }catch(err){
       res.status(400).send({msg:err.message})
    }
}

const getAllJobs=async(req,res)=>{
  try{
      const jobs=await jobModel.find({})
      res.send(jobs)
  }catch(err){
    res.status(400).send({msg:err.message})
  }
}

const getJobById=async(req,res)=>{
    const {id:jobId}=req.params;
    try{
        const job=await jobModel.find({_id:jobId})
        res.send(job)
    }catch(err){
        res.status(400).send({msg:err.message})
    }
}

const editJob=async(req,res)=>{
    const {id:jobId}=req.params;
    const { fullName,mobile,email,jobType,location,profilePic,dob }=req.body
    try{
       if(!fullName || !mobile || !email || !jobType || !location || !profilePic || !dob){
         throw new Error("Please provide all information")
       }
       const jobfind=await jobModel.findOne({_id:jobId})
    if(!jobfind){
      throw new Error(`No job with id ${jobId}`)
    }
  
    const updatedjob=await jobModel.findOneAndUpdate({_id:jobId},req.body,{
      new:true,
      runValidators:true,
    })
  
    res.status(200).json({ updatedjob });
    }catch(err){
        res.status(400).send({msg:err.message})
    }

}

const deleteJob=async(req,res)=>{
    const {id:jobId}=req.params;
    try{
     const job=await jobModel.findOne({_id:jobId})
     if(!job){
         throw new Error("Job not found")
     }
     await jobModel.deleteOne({_id:jobId})
     res.status(200).json({msg:"Job deleted"})
    }catch(err){
        res.status(400).send({msg:err.message})
    }
}

export {createJob,getAllJobs,editJob,deleteJob,getJobById}