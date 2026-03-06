import { create} from "zustand";
import { toast } from "react-hot-toast";
import axios from "../middlewar/axios";


const userStore=create((set,get)=>({
    loading:false,
    user:null,
    checkuser:true,

    SignupUser:async (user) => {
        if(!user?.name  || !user?.email || !user?.password) return toast.error("Please fill all the fields",{position:"top-right"});
        if(user?.password.length<6) return toast.error("Password must be at least 6 characters long",{position:"top-right"});
        if(!user?.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return toast.error("Please enter a valid email address",{position:"top-right"});

        set({loading:true});
        try {

            const response =await axios.post("/auth/signup",user);
            if(response.data.success){
                set({user:response.data.data});
                 toast.success(response.data.message,{position:"top-right"});
                }else{
                    toast.error(response.data.message,{position:"top-right"});
                }
            
        

            
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message,{position:"top-right"});
            
        }finally {
            set({loading:false});
        }
        
    },
    LoginUser:async (user) => {
        if(!user?.email || !user?.password) return toast.error("Please fill all the fields",{position:"top-right"});
        if(!user?.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return toast.error("Please enter a valid email address",{position:"top-right"});

        set({loading:true});
        try {
            const response =await axios.post("/auth/login",user);
            if(response.data.success){
                set({user:response.data.data});
                 toast.success(response.data.message,{position:"top-right"});
                }else{
                    toast.error(response.data.message,{position:"top-right"});
                }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message,{position:"top-right"});
        }finally {
            set({loading:false});
        }
        
    },
    LogoutUser:async () => {
        try {
            const response=await axios.post("/auth/logout");
            set({user:null});
            
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message,{position:"top-right"});
            
        }
    },

    CheckAuth:async () => {
        set({checkuser:true});
      
        try {
            const response=await axios.get("/auth/check-auth");
            if(response.data.success){
                set({user:response.data.data});
            }
            
        } catch (error) {
            console.log(error);
            
            
        }finally {
            set({checkuser:false});
        }
        
    },

    EmailVerify:async (emailcode) => {
        try {
            const response=await axios.post("/auth/verify-email",{emailcode});
            if(response.data.success){
                toast.success(response.data.message || "Email verified successfuly",{position:"top-right"});
                set({user:{...get().user,isVerified:true}});
            }else{
                toast.error(response.data.message || "Invalid code or you use expire code",{position:"top-right"});
            }
        } catch (error) {
            toast.error(error.response.data.message || "Internal server error",{position:"top-right"});
            throw new Error(error.response.data.message || "Internal server error");
            
        }
    },

    ResendEmailCode:async () => {
        set({loading:true});
        try {
            const response=await axios.post("/auth/resend-code");
            if(response.data.success){
                toast.success(response.data.message || "We sent an email code on your email,please check your email",{position:"top-right",duration:5000});
            }else{
                toast.error(response.data.message || "User doesn't exist",{position:"top-right"});
            }
        } catch (error) {
            toast.error(error.response.data.message || "Internal server error",{position:"top-right"});
            throw new Error(error.response.data.message || "Internal server error");
            
        }finally {
            set({loading:false});
        }
    },
    ForgetPassword:async (email) => {
        if(!email) return toast.error("Please enter your email address",{position:"top-right"});

        if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return toast.error("Please enter a valid email address",{position:"top-right"});
        
        set({loading:true});
        try {
         const response=await axios.post("/auth/forget-password",{email});
         if(response.data.success){
            toast.success(response.data.message || "We sent an link on you email address to reset password,please check you email",{position:"top-right",duration:5000});
            return true;
         }
         return false;
        } catch (error) {
            toast.error(error.response.data.message || "Internal server error",{position:"top-right"});
            return false;
          
            
        }finally {
            set({loading:false});
        }
        
    }


    
   
}))


export default userStore;