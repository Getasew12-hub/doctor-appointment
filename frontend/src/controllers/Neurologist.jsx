import React, { useEffect } from 'react'
import doctorStore from '../store/doctor';
import { Loader } from 'lucide-react';
import ImageBox from './ImageBox';

const doctors = [

  { id: 4, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image4.png" },
  { id: 5, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image5.png" },

];


function  Neurologist() {
    const {GetDoctorbySpecialist,loading,doctor}=doctorStore();
  useEffect(()=>{
    GetDoctorbySpecialist("Neurologist");
  },[])

  if(loading) return  <div className='flex justify-center items-center h-screen '><Loader size={45} className='animate-spin'/></div>;
  return doctor?.length==0 ? <p className='mt-5 text-center w-full '>Not data found</p>:(
           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {doctor?.map((doctor) => (
           <ImageBox doctor={doctor}/>
          ))}
        </div>
  )
}

export default  Neurologist
