import Doctors from "../model/doctor.js";

export const TopDoctors=async (req,res) => {
    try {
        const getTopdoctors=await Doctors.find().sort({appointmentsCount:-1}).limit(10);

         //remove doctor password
        const topDoctors=getTopdoctors.map((doctor)=>{
            const {password,...others}=doctor._doc;
            return others;
        })
    return res.status(200).json({success:true,data:topDoctors});
        
    } catch (error) {
        console.log("error on get single doctor", error.message);
        return res.status(500).json({success: false, message: "Failed to fetch doctor"});
    }    
}


export const AllDoctors=async (req,res) => {    try {
        const getAlldoctors=await Doctors.find();
        
        const allDoctors=getAlldoctors.map((doctor)=>{
            const {password,...others}=doctor._doc;
            return others;
        })
        return res.status(200).json({success:true,data:allDoctors});
        
    } catch (error) {
        console.log("error on top doctors",error.message);
        return res.status
        
    }
    
}   

export const GetDoctorBySpeciality=async (req,res) => {
    try {
        const {speciality}=req.params;
        const getAlldoctors=await Doctors.find({speciality});
       const allDoctors=getAlldoctors.map((doctor)=>{
           const {password,...others}=doctor._doc;
           return others;
       })
        return res.status(200).json({success:true,data:allDoctors});
        
    } catch (error) {
        console.log("error on top doctors",error.message);
        return res.status
        
    }
    
}

// TODO 
export const GetSingleDoctor=async (req,res) => {
    try {
        const {id}=req.params;
        const getSingleDoctor=await Doctors.findById(id);
         if (!getSingleDoctor) {
            return res.status(404).json({success: false, message: "Doctor not found"});
         }
        const {password,...others}=getSingleDoctor._doc;

        return res.status(200).json({success:true,data:others});
        
    } catch (error) {
        console.log("error on top doctors",error.message);
        return res.status
        
    }
    
}