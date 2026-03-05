import express from "express";
import {UserProfile, UpdateProfile,MyAppointment} from "../controlers/user.router.js";
import {userProtect} from "../middleware/protect.js"


const router=express.Router();

router.get("/profile",userProtect,UserProfile);
router.get("/my-appointment",userProtect,MyAppointment)
router.post("/update-profile",userProtect,UpdateProfile);

export default router