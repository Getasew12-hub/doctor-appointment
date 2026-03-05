import exporess from "express"
import {AllAppointments,Appointment,Dashboared,AllPatients} from "../controlers/dcotorDashboared.controller.js"
const router=exporess.Router();
router.get("/dashboard",Dashboared);
router.get("/appointment",AllAppointments);
router.get("/patients",AllPatients);
router.post("/appointment",Appointment);


export default router;