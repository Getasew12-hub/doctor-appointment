import Appointment from "../model/appointmet.js";
import User from "../model/user.js";

//TODO
export const UserProfile=async (req,res) => {
    try {
        return res.status(200).json({success:true,data:req.user});
    } catch (error) {
        console.log("error on user profile",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}
export const MyAppointment=async (req,res) => {
    try {
        const {_id}=req.user;

        const userAppointment=await Appointment.find({userId:_id});
        return res.status(200).json({success:true,data:userAppointment});

    } catch (error) {
             console.log("error on my appointement",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
        
    }
    
}
export const UpdateProfile=async (req,res) => {
    //TODO
    try {
        const {_id}=req.body;
        const {data}=req.body;
          await User.findByIdAndUpdate(_id,data);
          return res.status(200).json({success:true,message:"successfully update profile"})
    } catch (error) {
        console.log("error on update prorile",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
        
    }
    
}