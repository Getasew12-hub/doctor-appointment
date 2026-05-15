import { create } from "zustand";
import axios from "../middlewar/axios"

const doctorDashboradStore=create((set,get)=>({
    loading:false,
    data:null,

    DoctorDashboard:async () => {
        set({loading:true})
        try {
            const response=await axios.get("/doctor-dashboard/dashboard");
            set({data:response.data.data});
            
        } catch (error) {
            console.log("error on doctor dashboard::",error)
            
        }finally{
        set({loading:false})
        }
        
    },
    AllDoctorAppointments:async () => {
        set({loading:true})

        try {
            const response=await axios.get("/doctor-dashboard/appointment");
            set({data:response.data.data})
        } catch (error) {
            console.log("error on all doctor appointments",error)
        }finally{
            set({loading:false})
        }
        
    },

    DoctorPatients:async () => {
        set({loading:true})
        try {
            const response=await axios.get("/doctor-dashboard/patients");
            set({data:response.data.data})
        } catch (error) {
            console.log("error on all doctor appointments",error)
        }finally{
            set({loading:false})
        }
        
    }
}))


export default doctorDashboradStore;