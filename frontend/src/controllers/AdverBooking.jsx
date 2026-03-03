import React from 'react'

function AdverBooking() {
  return (
    <div className='bg-main rounded-lg flex justify-center px-10 text-white h-80 my-24 items-end  xl:px-20 max-sm:px-2.5 max-sm:max-h-52 max-vs:max-h-40!'>
        <div className='w-1/2   h-full flex justify-center items-start flex-col gap-3.5'>
            <h2 className='font-bold md:text-4xl sm:text-3xl text-2xl max-sm:text-[15px]'>Book Appointment 
With 100+ Trusted Doctors</h2>
   <button className='bg-white text-black py-2.5 px-8 rounded-full cursor-pointer max-sm:text-sm max-sm:py-1 max-sm:px-3 max-sm:text-vs'>Create account</button>
        </div>

        <div  className=' w-1/2 flex max-sm:justify-end  '>
         <img src="/advert.png" alt="" className='h-full object-contain max-h-96' />
        </div>
    </div>
  )
}

export default AdverBooking