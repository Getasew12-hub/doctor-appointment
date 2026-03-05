import mongoose from "mongoose";


const appointmentSchema=new mongoose.Schema({
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor",
        required:true
    },
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending"
    },
   paid:{
       type:Boolean,
       default:false
   },
    reason:{
        type:String,
        required:true
    }
})

const Appointment=mongoose.model("appointment",appointmentSchema);
export default Appointment;