import express from "express";
import {AddDoctor,Dashboard,AllAppointments,AllDoctors} from "../controlers/addmin.controller.js";

const router = express.Router();

router.get("/dashboard",Dashboard);
router.get("/all-appointments",AllAppointments);
router.get("/all-doctors",AllDoctors);
router.post("/add-doctor",AddDoctor);





export default router;