import { create } from "zustand";
import axios from "../middlewar/axios"
import { data } from "react-router-dom";
import toast from "react-hot-toast";
const adminStore =create((set,get)=>({
    loading:false,
    data:null,
  GetDashboardData:async () => {
    set({loading:true})
    try {
        const response=await axios.get("/admin/dashboard");
        set({data:response.data.data})
    } catch (error) {
        console.log("errror on get dashboard data",error);
    }finally{
       set({loading:false})
    }
    
  },

GetAppointments:async () => {
    set({loading:true})
    try {
    const response=await axios.get("/admin/all-appointments");
    set({data:response.data.data});
    
        
    } catch (error) {
        console.log("error on get appointments",error);
        
    }finally{
    set({loading:false})
    }
    
},
AddNewDoctor:async (data) => {
    
      if(!data?.name || !data?.speciality ||  !data?.password || !data?.experience || !data.fees){
         return toast.error("Please enter all value",{position:"top-right"});
      }
       if( !data?.education || !data?.address1 || !data?.address2 || !data?.about){
         return toast.error("Please enter all value",{position:"top-right"});
       }

       if(!data?.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return toast.error("Please enter a valid email address",{position:"top-right"});

      set({loading:true})

    try {
    const response=await axios.post("/admin/add-doctor",{data});
    
    toast.success("Sucessfully create ",{position:"top-right"})
    return true;
        
    } catch (error) {
        console.log("error on get appointments",error);
        toast.error(error.response.data.message);
        return false;
        
    }finally{
    set({loading:false})
    }
    
},
DoctorDataUpdate:async (data,id) => {
    
      if(!data?.name || !data?.speciality  || !data?.experience || !data.fees){
         return toast.error("Please enter all value",{position:"top-right"});
      }
       if( !data?.education || !data?.address1 || !data?.address2 || !data?.about){
         return toast.error("Please enter all value",{position:"top-right"});
       }

       if(!data?.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return toast.error("Please enter a valid email address",{position:"top-right"});

      set({loading:true})

    try {
    const response=await axios.patch(`/admin/update/${id}`,{data});
    
    toast.success("Sucessfully create ",{position:"top-right"})
        
    } catch (error) {
        console.log("error on get appointments",error);
        toast.error(error.response.data.message);
        
    }finally{
    set({loading:false})
    }
    
},
PatientsList:async () => {
  set({loading:true})
  try {
    const response =await axios.get("/admin/app-patients");
    set({data:response.data.data});
    
  } catch (error) {
    console.log("error on patients list ",error);
    
  }finally{
   set({loading:false})
  }
  
}

}))


export default adminStore;