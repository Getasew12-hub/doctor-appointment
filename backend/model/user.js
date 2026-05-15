import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
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
    isVerified:{
        type:Boolean,
        default:false
    },
    emailVerifyCode:{
        type:String,
        default:null
    },
    emailVerifyExpire:{
        type:Date,
        default:null
    },
    resetPasswordToken:{
        type:String,
        default:""
    },
    resetpasswordexpire:{
        type:Date,
        default:null
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    fillDetail:{
        type:Boolean,
        default:false
    }
    
},{
    timestamps:true
})


const User=mongoose.model("User",userSchema);
export default User