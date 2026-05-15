import React from 'react'
import {useNavigate} from "react-router-dom"

function ImageBox({doctor}) {
    const navigator=useNavigate();
    
  return (
     <article
             
              onClick={()=>navigator(`/appointment/${doctor._id}`,{state:doctor})}
              className="overflow-hidden h-fit rounded-md border border-blue-200 bg-white cursor-pointer"
            >
              <div className='h-36 bg-blue-50 flex justify-center items-center overflow-hidden'>

                <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full w-full object-cover "
              />
              </div>

              <div className="p-2.5">
                <p className="text-[10px] font-medium text-green-600">• Available</p>
                <h3 className="mt-1 text-sm font-medium text-slate-800">{doctor.name}</h3>
                <p className="text-[11px] text-slate-500">{doctor.role}</p>
              </div>
            </article>
  )
}

export default ImageBox