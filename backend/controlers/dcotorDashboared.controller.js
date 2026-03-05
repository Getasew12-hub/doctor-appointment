import Doctor from "../model/doctor.js"
import appointment from "../model/appointmet.js"

export const Dashboared=async (req,res) => {

    try {
        const {_id,total_earnings}=req.user;
        const totalAppointme=await appointment.countDocuments({doctorId:_id});
        const totalPaients=await appointment.countDocuments({doctorId:_id,paid:true});

        const getLesteAppointemnt=await appointment.find({doctorId:_id}).sort({createdAt:-1}).limit(10);
        
        const data={
            totalAppointme,
            totalPaients,
            total_earnings,
            getLesteAppointemnt
        }
        return res.status(200).json({success:true,data});
    } catch (error) {
        console.log("error on dashboared",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
        
    }
    
}

export const AllAppointments=async (req,res) => {
    try {
        const {_id}=req.user;
        const appointments=await appointment.find({doctorId:_id}).sort({createdAt:-1});
        return res.status(200).json({success:true,data:appointments});
        
    } catch (error) {
        console.log("error on all appointments",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
        
    }
    
}

export const AllPatients=async (req,res) => {
    try {
        const {_id}=req.user;
        
        const patients=await appointment.find({doctorId:_id,paid:true}).sort({createdAt:-1});
        
      return res.status(200).json({success:true,data:patients});
        
    } catch (error) {
        console.log("error on all appointments",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
        
    }
    
}

export const Appointment=async (req,res) => {
    try {
        const {val}=req.body;
        const {_id}=req.user;

        await appointment.findByIdAndUpdate({doctorId:_id,status:val});
        return res.status(200).json({success:true});
        
    } catch (error) {
          console.log("error on all appointments",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
    
}