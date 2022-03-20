import express from "express"
import { createJob,getAllJobs,editJob,deleteJob,getJobById} from "../controllers/jobControllers.js"

const router=express.Router()

router.post("/",createJob)
router.get("/",getAllJobs)
router.get("/:id",getJobById)
router.put("/:id",editJob)
router.delete("/:id",deleteJob)

export const jobRouter=router;