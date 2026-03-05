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
        default:""
    },
    emailVerifyExpire:{
        type:Date,
        default:""
    },
    resetPasswordToken:{
        type:String,
        default:""
    },
    resetPasswordExpire:{
        type:Date,
        default:""
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    }
    
},{
    timestamps:true
})


const User=mongoose.model("User",userSchema);
export default User