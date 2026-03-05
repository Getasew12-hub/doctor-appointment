import express from "express"
import env from "dotenv"
import cookieParser from "cookie-parser"
import {cloudinaryConfig} from "./config/cloudinary.js"

import {userProtect,doctorProtect,adminProtect} from "./middleware/protect.js"
import AuthRouter from "./routers/auth.router.js"
import dbconnect from "./config/db.js"
import DoctorRouter from "./routers/doctor.router.js"
import UserRouter from "./routers/user.router.js"
import PaymentRouter from "./routers/payment.router.js"
import DoctorDashboaredRotuer from "./routers/dcotorDashboared.router.js"
import AddminRouter from "./routers/addmin.router.js"

env.config()
const app=express();

const port=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

cloudinaryConfig();
dbconnect();
app.use("/api/auth",AuthRouter);
app.use("/api/doctor",DoctorRouter);
app.use("/api/doctor-dashboard",doctorProtect,DoctorDashboaredRotuer)
app.use("/api/user",UserRouter)
app.use("/api/payment",userProtect,PaymentRouter);
app.use("/api/admin",adminProtect,AddminRouter);


app.listen(port,()=>console.log(`server is running on port ${port}`));

