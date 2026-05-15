import express from "express";
import {AddDoctor,Dashboard,AllAppointments,AllDoctors,UpdateProfile, AllPatients} from "../controlers/addmin.controller.js";

const router = express.Router();

router.get("/dashboard",Dashboard);
router.get("/all-appointments",AllAppointments);
router.get("/all-doctors",AllDoctors);
router.post("/add-doctor",AddDoctor);
router.patch("/update/:id",UpdateProfile)
router.get("/app-patients",AllPatients)





export default router;