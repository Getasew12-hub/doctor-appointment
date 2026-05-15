
import jwt from "jsonwebtoken"
import User from "../model/user.js"
import Doctors from "../model/doctor.js"

export const userProtect = async(req, res, next) => {
    try {
       const token=req.cookies.token;
       
       if(!token) return res.status(401).json({message:"Not authorized"});

        const getuserid=jwt.verify(token,process.env.SECRET_KEY);
        if(!getuserid) return res.status(401).json({message:"Not authorized"});
        let user
         user =await User.findById(getuserid.id);
         
        if(!user){
            user=await Doctors.findById(getuserid.id);
             if(!user) return res.status(401).json({message:"Not authorized"});
        } 
        req.user=user;
        next();


        
   
    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Not authorized" });
        }
        console.error("error on protect middleware", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }}
export const doctorProtect=async (req,res,next) => {
    try {
        const token=req.cookies.token;
        if(!token) return res.status(401).json({message:"Not authorized"});

        const getuserid=jwt.verify(token,process.env.SECRET_KEY);
        if(!getuserid) return res.status(401).json({message:"Not authorized"});

        const user=await Doctors.findById(getuserid.id);
        if(!user) return res.status(401).json({message:"Not authorized"});

        if(user.role!=="doctor") return res.status(401).json({message:"Not authorized"});
        req.user=user;
        next();
        
    } catch (error) {
        console.log("error on protect router",error.message);
        return res.status(500).json({message:"Internal server error"});
        
    }
    
}


export const adminProtect=async (req,res,next) => {
    try {
        const token=req.cookies.token;
        if(!token) return res.status(401).json({message:"Not authorized"});

        const getuserid=jwt.verify(token,process.env.SECRET_KEY);
        if(!getuserid) return res.status(401).json({message:"Not authorized"});

        const user=await User.findById(getuserid.id);
        if(!user) return res.status(401).json({message:"Not authorized"});

        if(user.role!=="admin") return res.status(401).json({message:"Not authorized"});
        req.user=user;
        next();
        
    } catch (error) {
        console.log("error on protect router",error.message);
        return res.status(500).json({message:"Internal server error"});
        
    }
    
}