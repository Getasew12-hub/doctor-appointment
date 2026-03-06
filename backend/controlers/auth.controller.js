import jwt from "jsonwebtoken";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import {sendEmail,PASSWORD_FORGOT} from "../utils/sendEmail.js";
import crypto from "crypto";


const createToken=async(id,res)=>{

    const token= jwt.sign({id},process.env.SECRET_KEY,{expiresIn:"7d"});
    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV!=="development",
        sameSite:process.env.NODE_ENV!=="development"?"none":"lax",
        maxAge:1000*60*60*24*7 // 1 week
    });
}

export const Signup =async (req, res) => {
   try {
    const {name,email,password}=req.body;
    
    if(!name || !email || !password){
        return res.status(400).json({
            success:false,
            message:"Please fill all the fields"
        })
    }
    if(password.length<6){
        return res.status(400).json({
            success:false,
            message:"Password must be at least 6 characters"
        })
    }

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return res.status(400).json({
            success:false,
            message:"Please enter a valid email address"
        })
    }
    const checkUserExistance=await User.find({email});
     if(checkUserExistance.length>0){
        return res.status(400).json({
            success:false,
            message:"User already exists"
        })
     }
  const hashpassword=await bcrypt.hash(password,10);
     
  const emailcode = crypto.randomInt(100000, 1000000);  
  const expireDate=new Date();
  expireDate.setDate(expireDate.getDate()+1);
  



     const newUser=await User.create({
        name,
        email,
        password:hashpassword
     });

    await createToken(newUser._id,res);
    await User.updateOne({email},{$set:{emailVerifyCode:emailcode,emailVerifyExpire:expireDate}});

    await sendEmail(email,emailcode);
    const data={
        ...newUser._doc,
        password:undefined,
        emailVerifyCode:undefined,
        emailVerifyExpire:undefined
    };
    
    
     res.status(200).json({
        success:true,
        message:"User created successfully",
        data
     })


    
   } catch (error) {
    
    console.log("error on singup",error.message);
    return res.status(500).json({success:false,message:"Internal server error"})
   }
};
export const Login = async(req, res) => {
   
       try {
        const {email,password} =req.body;
        if(!email || !password) return res.status(400).json({success:false,message:"Please enter all value"})

            const getuser=await User.find({email});
            if(!getuser || getuser.length==0) return res.status(400).json({success:false,message:"User doesn't exist"})

            const userpassword=getuser[0].password;
            
            const checkpassword=await bcrypt.compare(password,userpassword);

            if(!checkpassword) return res.status(401).json({success:false,message:"Incorrect password"});

            await createToken(getuser[0]._id,res);

            return res.status(200).json({
                success:true,message:"Login successful", data: {
                ...getuser[0]._doc,
                password: undefined,
                resetpasswordtoken: undefined,
                restpasswordexpire: undefined,
                emailVerifyCode: undefined,
                emailVerifyExpire: undefined
            }});
                   
       } catch (error) {
         console.log("error on login",error.message);
    return res.status(500).json({success:false,message:"Internal server error"})
        
       }
};
export const Logout = (req, res) => {
     try {
            res.clearCookie("token",{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:process.env.NODE_ENV==="production"?"none":"strict",
        });
        return res.status(200).json({success:true,message:"Logout successful"});        
     } catch (error) {
        console.log("error on logout",error.message);
        return res.status(500).json({success:false,message:"Internal server error"})
        
     }
};


export const VerifyEmail=async(req,res)=>{
   
    try {
        const {emailcode}=req.body;
       
        const {email}=req.user;
        
        if(!emailcode) return res.status(400).json({success:false,message:"Please enter all value"})

        const getuser=await User.find({email,emailVerifyCode:emailcode,emailVerifyExpire:{$gt:new Date()}});
        if(getuser.length==0) return res.status(400).json({success:false,message:"Invalid code or you use expire code"});

        const user=getuser[0];
        await User.updateOne({email:user.email},{$set:{isVerified:true,emailVerifyCode:null,emailVerifyExpire:null}});

        return res.status(200).json({
            success:true,
            message:"Email verified successfuly",
            
        });
    } catch (error) {
        console.log("error on verify email",error.message);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}
export const ResendCode=async(req,res)=>{
    try {
   const {email}=req.user;
      if(!email) return res.status(400).json({success:false,message:"Please enter all value"})
   
        const getuser=await User.find({email});
        if(getuser.length==0) return res.status(400).json({success:false,message:"User doesn't exist"})
        const user=getuser[0];
        const emailcode = crypto.randomInt(100000, 1000000);  
        const expireDate=new Date();
        expireDate.setDate(expireDate.getDate()+1);
        await User.updateOne({email:user.email},{$set:{emailVerifyCode:emailcode,emailVerifyExpire:expireDate}});

        await sendEmail(email,emailcode);
        return res.status(200).json({success:true,message:"We sent an email code on your email,please check your email"});
    
        
    } catch (error) {
        console.log("error on resend code",error.message);
        return res.status(500).json({success:false,message:"Internal server error"})
        
    }
}
export const ForgetPassword=async(req,res)=>{
    try {
        const {email}=req.body;
        if(!email) return res.status(400).json({success:false,message:"Please enter all value"})
   
        const getuser=await User.find({email});
        if(getuser.length==0) return res.status(400).json({success:false,message:"User doesn't exist"})
        const user=getuser[0];
        const token=  crypto.randomBytes(20).toString('hex');
        const now=new Date();
        const day=new Date(now.getTime()+1000*60*60);                            
       await User.updateOne({email:user.email},{$set:{resetpasswordtoken:token,resetpasswordexpire:day}}); 

       await PASSWORD_FORGOT(user.email,token);

        return res.status(200).json({success:true,message:"We sent an link on you email address to reset password,please check you email"});
        
    } catch (error) {
          console.log("error on forget password", error.message);
         return res.status(500).json({success:false, message:"Internal server error"});
        
    }
}
export const ResetPassword=async(req,res)=>{
    try {
        const  {password}=req.body;
        const {token}=req.params;
        if(!token || !password) return res.status(400).json({success:false,message:"Please enter all value"})
       
      
        if(password.length<6) return res.status(400).json({success:false,message:"Password must be at least 6 characters"})
        const getuser=await User.find({resetpasswordtoken:token,restpasswordexpire:{$gt:new Date()}});
        if(getuser.length==0) return res.status(400).json({success:false,message:"Invalid token or you use expire token"});
        const user=getuser[0];

        const hashpassword=await bcrypt.hash(password,10);   
        await User.updateOne({email:user.email},{$set:{password:hashpassword,resetpasswordtoken:undefined,restpasswordexpire:undefined}});

        return res.status(200).json({success:true,message:"Password reset successful"});     
    } catch (error) {
        console.log("error on reset password",error.message);
        return res.status(500).json({success:false,message:"Internal server error"})
        
    }
}
export const CheckAuth=(req,res)=>{
   
       
      return res.status(200).json({success:true,data:req.user});
   
}

