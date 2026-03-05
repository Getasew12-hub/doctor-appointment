import express from "express";
import {userProtect} from "../middleware/protect.js";
import { getPayment,chekPayment } from "../controlers/payment.controller.js";

const router = express.Router();

router.post("/",userProtect,getPayment)
router.post("/checkpayment",userProtect,chekPayment);

export default router;