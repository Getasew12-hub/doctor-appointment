import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import doctorStore from "../store/doctor"
import { Loader } from 'lucide-react';




function DoctorsList() {
  const navigator=useNavigate();
  const pathnameStart=useLocation().pathname.split("/")[1];
  const {AllDoctorsList,loading,doctor}=doctorStore();

  useEffect(()=>{
    AllDoctorsList()
  },[])

  if(loading) return <div className='flex justify-center items-center h-screen '><Loader size={45} className='animate-spin'/></div>;

  function handldNavigariton(doctor){
    if(pathnameStart==="admin"){
      navigator("/admin/doctor/"+doctor?._id);
    }else{
      navigator("/appointment/"+doctor?._id,{state:doctor});
    }
    
  }
  return (
           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-sm:px-3 px-6">
          {doctor?.length>0 && doctor?.map((doctor) => (
            <article
              key={doctor.id}
              className="overflow-hidden h-fit rounded-md border border-blue-200 bg-white cursor-pointer"
              onClick={()=>handldNavigariton(doctor)}
            >
              <div className='h-36 bg-blue-50 flex justify-center items-center overflow-hidden'>

                <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full object-cover w-full"
              />
              </div>

              <div className="p-2.5">
               {doctor?.available ? <p className="text-[10px] font-medium text-green-600">• Available</p>:
               <p className="text-[10px] font-medium text-red-600">unavailable</p>
               } 
                <h3 className="mt-1 text-sm font-medium text-slate-800">{doctor.name}</h3>
                <p className="text-[11px] text-slate-500">{doctor?.speciality}</p>
              </div>
            </article>
          ))}
        </div>
  )
}

export default DoctorsList