import express from "express";
import{TopDoctors,GetSingleDoctor,GetDoctorBySpeciality,AllDoctors} from "../controlers/doctor.controller.js"

const router = express.Router();
router.get("/top-doctors",TopDoctors);
router.get("/get-doctor/:id",GetSingleDoctor);
router.get("/get-doctors-by-speciality/:speciality",GetDoctorBySpeciality);
router.get("/all-doctors",AllDoctors);

export default router;