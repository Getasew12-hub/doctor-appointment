import Appointment from "../model/appointmet.js";

export const GetAppointments=async(req,res)=>{
    try {
       const {_id}=req.user;
       if(!_id) return res.status(400).json({success:false,message:"Something went wrong"});

       const appointments=await Appointment.find({patientId:_id}).populate("doctor","name email image");
       return res.status(200).json({success:true,data:appointments});
     

        
    } catch (error) {
        console.log("error on get appointments",error.message);
        return res.status(500).json({success:false,message:"Internal server error"})
        
    }
}

export const AddAppointments=async(req,res)=>{
    try {
       const {_id}=req.user;
       const {doctorId,data}=req.body;
       if(!_id) return res.status(400).json({success:false,message:"Something went wrong"});

       if(!doctorId) return res.status(400).json({success:false,message:"Please enter all value"});

       const checkIsDcotorFree=await Appointment.find({doctorId,date:data.date,time:data.time});

       if(checkIsDcotorFree.length>0) return res.status(400).json({success:false,message:"Doctor is not free on this time"});

       const appointment=await Appointment.create({
           doctorId,
           patientId:_id,
           date:data.date,
           time:data.time,
           reason:data.reason

       })

       return res.status(200).json({success:true,data:appointment});

    } catch (error) {
        console.log("error on add appointments",error.message);
        return res.status(500).json({success:false,message:"Internal server error"})
        
    }
}

export const DeleteAppointments=async(req,res)=>{
    try {
       const {_id}=req.user;
       const {id}=req.params;
       if(!_id) return res.status(400).json({success:false,message:"Something went wrong"});
        
       const isPaid=await Appointment.findById(id);
       if(isPaid.paid) return res.status(400).json({success:false,message:"You can't delete this appointment"});
       
       if(!id) return res.status(400).json({success:false,message:"Please enter all value"});

       const appointment=await Appointment.findByIdAndDelete(id);
       return res.status(200).json({success:true,data:appointment});

    } catch (error) {
        console.log("error on delete appointments",error.message);
        return res.status(500).json({success:false,message:"Internal server error"})
        
    }
}








