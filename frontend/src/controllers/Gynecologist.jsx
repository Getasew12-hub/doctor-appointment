import { Loader } from 'lucide-react';
import React, { useEffect } from 'react'
import doctorStore from '../store/doctor';
import ImageBox from "./ImageBox"

const doctors = [
  { id: 1, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image1.png" },
  { id: 2, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image2.png" },
  { id: 3, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image3.png" },
 

];


function Gynecologist() {
   const {GetDoctorbySpecialist,loading,doctor}=doctorStore();
  useEffect(()=>{
    GetDoctorbySpecialist("Gynecologist");
  },[])

  if(loading) return  <div className='flex justify-center items-center h-screen '><Loader size={45} className='animate-spin'/></div>;

  return doctor?.length==0 ? <p className='mt-5 text-center w-full '>Not data found</p> : (
           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {doctor?.map((doctor) => (
         <ImageBox doctor={doctor}/>
          ))}
        </div>
  )
}

export default Gynecologist