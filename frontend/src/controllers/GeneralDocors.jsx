import React, { useEffect } from 'react'
import doctorStore from '../store/doctor';
import {Loader} from "lucide-react";
import ImageBox from './ImageBox';

// const doctors = [


//   { id: 13, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image3.png" },
//   { id: 14, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image4.png" },
//   { id: 15, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image5.png" },

// ];


function GeneralDocors() {
  const {GetDoctorbySpecialist,loading,doctor}=doctorStore();
  useEffect(()=>{
    GetDoctorbySpecialist("General physician");
  },[])

  if(loading) return  <div className='flex justify-center items-center h-screen '><Loader size={45} className='animate-spin'/></div>;

  return doctor?.length==0 ? <p className='mt-5 text-center w-full '>Not data found</p> :(
           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4
           ">
            
          {doctor?.length>0 && doctor?.map((doctor) => (
           <ImageBox doctor={doctor} key={doctor._id}/>
          ))}
        </div>
  )
}

export default GeneralDocors