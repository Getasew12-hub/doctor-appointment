import { ArrowRight } from 'lucide-react'
import React from 'react'
import {useNavigate} from "react-router-dom"

function Header() {
  const navigate=useNavigate();
  return (
    <div className=' m-5 max-sm:m-3 rounded-lg text-white bg-main '>

      <div className='flex h-[84vh]  overflow-hidden flex-col px-3.5  pt-20  justify-between gap-4 lg:flex-row max-w-vl mx-auto'>

      
      <div className='flex flex-col justify-center items-center gap-6 text-center  flex-1/2 lg:items-start lg:text-start max-w-md mx-auto lg:gap-10'>
            <h1 className='font-bold  text-4xl max-sm:2xl max-vs:text-xl max-w-96'>Book Appointment With Trusted Doctors</h1>
            <div className='flex justify-center flex-col items-center lg:flex-row gap-2.5'>
            <img src="truest-doctor.png" alt="truest docotor image" className='h-10'/>
            <p className='text-sm max-w-102'>Simply browse through our extensive list of trusted doctors,
             schedule your appointment hassle-free.</p>
            </div>
            

             <button onClick={()=>navigate("/")} className='bg-white text-black rounded-full flex justify-center items-center gap-1 text-vs px-3 py-2 cursor-pointer'>Book appointment <ArrowRight size={15}/></button>
      </div>

      <div className=' flex justify-center m-auto lg:items-end lg:max-w-1/2 lg:border-gray-200 lg:shadow-lg lg:shadow-white lg:h-[70%] lg:rounded-md '>
         
    <img src="/doctors.png" alt="doctors image" className='  object-contain max-lg:max-h-80 '/>
      </div>
   

</div>

    </div>
  )
}

export default Header