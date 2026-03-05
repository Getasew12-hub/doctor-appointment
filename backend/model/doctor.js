import mongoose from "mongoose";


const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    },
    total_earnings:{
     type:Number,
     default:0
    },
    address1:{
        type:String,
        required:true
    },
    address2:{
        type:String,
        default:""
    },
    about:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    
    role:{
        type:String,
        default:"doctor"
    }
})


const Docrors=mongoose.model("doctor",doctorSchema);

export default Docrors;