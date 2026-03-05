import express from "express";
import { Signup,Login,Logout,CheckAuth,VerifyEmail,ForgetPassword,ResetPassword } from "../controlers/auth.controller.js";
import {userProtect} from "../middleware/protect.js";

const router = express.Router(); 

router.post("/signup",Signup );
router.post("/login",Login );
router.post("/logout",Logout );
router.post("/verify-email",VerifyEmail );
router.get("/check-auth",userProtect, CheckAuth );
router.post("/forget-password",ForgetPassword );
router.post("/reset-password/:token",ResetPassword );







export default router;

