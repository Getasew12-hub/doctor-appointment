import React from 'react'
import {useNavigate} from "react-router-dom"

const navigationLink=[
  {
   name:"General physician",
   link:"/general-physician",
   image:"/find/image0.png"
},
  {
   name:"Gynecologist",
   link:"/gynecologist",
   image:"/find/image1.png"
},
  {
   name:"Dermatologist",
   link:"/dermatologist",
   image:"/find/image2.png"
},
  {
   name:"Pediatricians",
   link:"/pediatricians",
   image:"/find/image3.png"
},
  {
   name:"Neurologist",
   link:"/neurologist",
   image:"/find/image4.png"
},
  {
   name:"Gastroenterologist",
   link:"/gastroenterologist",
   image:"/find/image5.png"
},

]
function FindNavigaror() {
  const navigate=useNavigate();
  return (
    <div className='mt-30 text-center flex flex-col items-center justify-center gap-12'>
      <div>
        <h2 className='font-bold lg:text-3xl text-2xl max-vs:lg'>Find by Speciality</h2>
        <p className='max-w-130 text-gray-500 mt-2.5 max-sm:text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      </div>
        

        <div className='flex gap-5 lg:gap-10 justify-center items-center flex-wrap'>
          {navigationLink.map((val,index)=>
          <div key={index} onClick={()=>navigate(val.link)} className='flex justify-center items-center flex-col cursor-pointer'>
            <img src={val.image} alt="image icon" className='h-10 sm:h-14 lg:h-24' />
            <p className='text-[10px] sm:text-vs lg:text-[16px]'>{val.name}</p>
            </div>
          )}
        </div>

    </div>
  )
}

export default FindNavigaror