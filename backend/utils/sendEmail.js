import nodemailer from "nodemailer";
import { EMAIL_VERIFY_TEMPLETE,EMAIL_PASSWOD_FORGET,PAYMENT_SECCESSFUL,ACCOUNT_CREATED } from "./verifyEmail.html.js";
import env from "dotenv";

env.config()

const transporter = nodemailer.createTransport({
     host:"smtp-relay.brevo.com",
     port:587,
     secure:false,
     auth: {
        user: process.env.SMPT_LOGIN,
        pass: process.env.PASSWORD,
      },

})

export const sendEmail = async(to,code)=>{
    const message = {
        from:`"CareSlot" <${process.env.SENDER_EMAIL}>`,
        to,
        subject:"Verify your email",
        html:EMAIL_VERIFY_TEMPLETE.replace("{verficationCode}",code),
        
        
    }
    await transporter.sendMail(message);
}

export const PASSWORD_FORGOT=async(to,token)=>{
  
    
    const message = {
        from:`"CareSlot" <${process.env.SENDER_EMAIL}>`,
        to,
        subject:"Reset Your password",
        html:EMAIL_PASSWOD_FORGET.replace("{passwordrest}",token),
        
        
    }
    await transporter.sendMail(message);
}

export const SEND_PAYMENT_SECCESS=async(to,name,amount)=>{
    const message={
        from:`"CareSlot" <${process.env.SENDER_EMAIL}>`,
        to,
        subject:"Successfuly payment",
        html:PAYMENT_SECCESSFUL.replace("{username}",name).replace("{amount}",amount)

    }

    await transporter.sendMail(message);
       
}


export const SEND_DOCTOR_ACCOUNT_CREATED=async(to,name,password)=>{
    const message={
        from:`"CareSlot" <${process.env.SENDER_EMAIL}>`,
        to,
        subject:"Your account has been created",
        html:ACCOUNT_CREATED.replace("{username}",name).replace("{password}",password)

    }

    await transporter.sendMail(message);
       
}
