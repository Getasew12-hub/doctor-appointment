

import doctor from "../model/doctor.js"
import appointment from "../model/appointmet.js"
import {SEND_PAYMENT_SECCESS} from "../utils/sendEmail.js"
export const getPayment=async (req,res) => {
    try {
       
       
      const {doctorId}=req.body

   if(!doctorId) return res.status(400).json({success:false,message:"Please enter all value"});

const getDoctor=await doctor.findById(doctorId);
if(!getDoctor || getDoctor.length==0) return res.status(400).json({success:false,message:"Please enter all value"});



const respose=await stripe.checkout.sessions.create({
    payment_method_types:['card'],
    line_items:[
          {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Appointment with Dr. ${getDoctor.name}`,
            },
            unit_amount: Math.round(getDoctor.fees * 100), // convert to cents
          },
          quantity: 1,
        },
    ],
    mode:"payment",
    success_url:`${process.env.URL_STIPE}/checkout/seccess?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:`${process.env.URL_STIPE}/cart`

})

    return res.status(200).json(respose.id)  
    } catch (error) {
        console.log("error on getpaymet",error.message);
        return res.status(500).json({error:"Internal sever error"})
    }
}

export const chekPayment = async (req, res) =>{

try {
    const user=req.user;
    const {sessionId,appointmentId,fees}=req.body;
   
    const status=await stripe.checkout.sessions.retrieve(sessionId);
    if(status.payment_status=='paid'){
        
        await appointment.findByIdAndUpdate({_id:appointmentId},{paid:true});
       SEND_PAYMENT_SECCESS(user.email,user.name,fees);
     return res.status(200).json(true)
    }

    return res.status(200).json(false)
} catch (error) {
    console.log('error on chekpayment',error.message);
    return res.status(500).json({message:"Internal server error"});
}


};