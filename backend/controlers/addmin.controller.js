import Doctors from "../model/doctor.js"
import Appointment from "../model/appointmet.js"
import User from "../model/user.js"
import { v2 as cloudinary } from 'cloudinary';
import { SEND_DOCTOR_ACCOUNT_CREATED } from "../utils/sendEmail.js";

export const Dashboard=async (req,res)=>{
    try {
        const totalDoctors=await Doctors.countDocuments({});
        const totalAppointments=await Appointment.countDocuments({});
        const totalPatients=await User.countDocuments({role:"user"});
        const latestAppointments=await Appointment.find({}).sort({createdAt:-1}).limit(5);
        const data={
            totalDoctors,
            totalAppointments,
            totalPatients,
            latestAppointments        }
        return res.status(200).json({success:true,data});
    } catch (error) {
        console.log("error on dashboared",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
        
    }
 
    
}

export const AllAppointments=async (req,res)=>{
    try {
        const appointments=await Appointment.find({}).sort({createdAt:-1});
        return res.status(200).json({success:true,data:appointments});
        
    } catch (error) {
        console.log("error on all appointments",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
        
    }
}

export const AllDoctors=async (req,res)=>{
    try {
        const doctors=await Doctors.find({}).sort({createdAt:-1});
        return res.status(200).json({success:true,data:doctors});
        
    } catch (error) {
        console.log("error on all doctors",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
    }}

export const AddDoctor=async (req,res)=>{
    try {
        const {name,email,speciality,password,education,experience,fees,address1,address2,about}=req.body;
        let {image}=req.body;
      
        if(!name || !email || !image || !speciality || !password || !education || !experience || !fees || !address1 || !address2 || !about){
            return res.status(400).json({success:false,message:"All fields are required"});
        }
        const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailRegex.test(email)) return res.status(400).json({success:false,message:"Please enter a valid email address"});
   

        if(password.length<6){
            return res.status(400).json({success:false,message:"Password must be at least 6 characters"});
        }
        
        if(image){
            const result = await cloudinary.uploader.upload(image,{folder:"doctors"});
            image=result.secure_url;
        }
        await SEND_DOCTOR_ACCOUNT_CREATED(email,name,password);
        const hashedPassword = await bcrypt.hash(password, 10);

        const doctor=await Doctors.create({name,email,image,speciality,password:hashedPassword,education,experience,fees,address1,address2,about});
        return res.status(200).json({success:true,data:doctor});
     
    } catch (error) {
        console.log("error on add doctor",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
        
    }
}



