import mongoose from "mongoose";

const userDetail=new mongoose.Schema({
    age:{
        type:Number,
        min:0,
        required:true
    },
   blood_type: {
          type:String,
          enum:['A','B','C',"Ab","O"],
          default:null,
    },
    phone_number:{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true
    }
})