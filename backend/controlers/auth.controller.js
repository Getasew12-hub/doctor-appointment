import jwt from "jsonwebtoken";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import {sendEmail,PASSWORD_FORGOT} from "../utils/sendEmail.js";
import crypto from "crypto";


const createToken=async(id,res)=>{

    const token= jwt.sign({id},process.env.SECRET_KEY);
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

    const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
     
  const sixDigits=Math.floor(100000+Math.random()*900000);
  const emailcode=sixDigits;
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
                console.log("the user data is this ",getuser)
            const userpassword=getuser[0].password;
            
            const checkpassword=await bcrypt.compare(password,userpassword);

            if(!checkpassword) return res.status(401).json({success:false,message:"Incorrect password"});

            await createToken(getuser[0]._id,res);

            return res.status(200).json({
                success:true,
                message:"user successfuly login",
                data:getuser[0]
            })
            
        
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
        return res.status(200).json({sucess:true,message:"Logout successful"});
        
     } catch (error) {
        console.log("error on logout",error.message);
        return res.status(500).json({success:false,message:"Internal server error"})
        
     }
};


export const VerifyEmail=async(req,res)=>{
   
    try {
        const {emailcode}=req.body;
        
        if(!emailcode) return res.status(400).json({success:false,message:"Please enter all value"})

        const getuser=await User.find({emailVerifyCode:emailcode,emailVerifyExpire:{$gt:new Date()}});
        if(getuser.length==0) return res.status(400).json({success:false,message:"Invalid code or you use expire code"});

        const user=getuser[0];
        await User.updateOne({email:user.email},{$set:{isVerify:true,emailVerifyCode:null,emailVerifyExpire:null}});

        return res.status(200).json({
            success:true,
            message:"Email verified successfuly",
            data:user
        });
    } catch (error) {
        console.log("error on verify email",error.message);
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
        await User.updateOne({email:user.email},{$set:{resetpasswordtoken:token,restpasswordexpire:day}});
        
        await PASSWORD_FORGOT(user.email,token);
        
        return res.status(200).json({success:true,message:"We sent an link on you email address to reset password,please check you email"});
        
    } catch (error) {
        
    }
}
export const ResetPassword=async(req,res)=>{
    try {
        const  {password}=req.body;
        const {token}=req.params;
        if(!token || !password) return res.status(400).json({success:false,message:"Please enter all value"})
        const getuser=await User.find({resetpasswordtoken:token,restpasswordexpire:{$gt:new Date()}});
        if(getuser.length==0) return res.status(400).json({success:false,message:"Invalid token or you use expire token"});
        const user=getuser[0];
        const hashpassword=await bcrypt.hash(password,10);
        await User.updateOne({email:user.email},{$set:{password:hashpassword,resetpasswordtoken:null,restpasswordexpire:null}});
        return res.status(200).json({success:true,message:"Password reset successfuly"});

        
    } catch (error) {
        console.log("error on reset password",error.message);
        return res.status(500).json({success:false,message:"Internal server error"})
        
    }
}
export const CheckAuth=(req,res)=>{
   
       
      return res.status(200).json(req.user);
   
}

