import { create } from "zustand";
import axios from "../middlewar/axios"

const doctorStore= create((set,get)=>({
    loading:false,
    doctor:null,
   

 AllDoctorsList:async () => {
   set({loading:true})
   try {
      const response =await axios.get("/doctor/all-doctors");
     
       set({doctor:response.data.data});
   } catch (error) {
      console.log("error on all doctor list ",error);
   }finally{
       set({loading:false})
   }
   
 },
 GetDoctorbySpecialist:async (speciality) => {
   set({loading:true})
   try {
      const response =await axios.get(`/doctor/get-doctors-by-speciality/${speciality}`);
      
       set({doctor:response.data.data});
   } catch (error) {
      console.log("error on all doctor list ",error);
   }finally{
       set({loading:false})
   }
   
 },
GetTopDoctorList:async () => {
    set({loading:true})
    try {
        const response=await axios.get("/doctor/top-doctors");
        set({doctor:response.data.data});
        
    } catch (error) {
        console.log("error on top doctor list ",error);
    }finally{
       set({loading:false})
    }
    
},
GetDoctorProfile:async(id)=>{
    
    set({loading:true})
    try {
        const response =await axios.get(`/doctor/get-doctor/${id}`);
        set({doctor:response.data.data})
    } catch (error) {
        console.log("error on get doctor profile",error);
    }finally{
    set({loading:false})
    }
},
GetReletedDoctors:async (id,speciality)=>{
   ;
    set({loading:true})
    try {
        const response =await axios.get(`/doctor/related-doctor/${id}/${speciality}`);
        set({doctor:response.data.data})
    } catch (error) {
        console.log("error on get doctor profile",error);
    }finally{
    set({loading:false})
    }
}

  




}))


export default doctorStore;