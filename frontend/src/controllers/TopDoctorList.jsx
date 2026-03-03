import { Dot } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
const doctorList=[
    {
        id:1,
        image:"/topdoctor/image1.png",
        avalablity:true,
        name:"Dr. Richard James",
        job:"General physician"

    },
    {
        id:2,
        image:"/topdoctor/image2.png",
        avalablity:true,
        name:"Dr. Richard James",
        job:"General physician"

    },
    {
        id:3,
        image:"/topdoctor/image3.png",
        avalablity:true,
        name:"Dr. Richard James",
        job:"General physician"

    },
    {
        id:4,
        image:"/topdoctor/image4.png",
        avalablity:true,
        name:"Dr. Richard James",
        job:"General physician"

    },
    {
        id:5,
        image:"/topdoctor/image5.png",
        avalablity:true,
        name:"Dr. Richard James",
        job:"General physician"

    },
    {
        id:6,
        image:"/topdoctor/image1.png",
        avalablity:true,
        name:"Dr. Richard James",
        job:"General physician"

    },
    {
        id:7,
        image:"/topdoctor/image2.png",
        avalablity:true,
        name:"Dr. Richard James",
        job:"General physician"

    },
    {
        id:8,
        image:"/topdoctor/image3.png",
        avalablity:true,
        name:"Dr. Richard James",
        job:"General physician"

    },
    {
        id:9,
        image:"/topdoctor/image4.png",
        avalablity:true,
        name:"Dr. Richard James",
        job:"General physician"

    },
    {
        id:10,
        image:"/topdoctor/image5.png",
        avalablity:true,
        name:"Dr. Richard James",
        job:"General physician"

    },
    

    
]

function TopDoctorList() {
    const navigator=useNavigate();
  return (
    <div className='mt-20 text-center flex flex-col justify-center items-center gap-6'>
        <div>
           <h2 className='font-bold lg:text-3xl text-2xl max-vs:lg '>Top Doctors to Book</h2>
        <p className='max-w-130 text-gray-500 mt-2.5 max-sm:text-sm'>Simply browse through our extensive list of trusted doctors.</p> 
        </div>
       

        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3  w-full   '>
            {doctorList.map((val,index)=>
            <div key={index} className='border border-gray-200 rounded-md text-left cursor-pointer ' onClick={()=>navigator(`/appointment/${val.id}`)}>
                <div className='bg-gray-100 flex justify-center h-70 overflow-hidden items-end max-sm:h-60 max-vs:h-40!'>
                    <img src={val.image} alt={val.name} className='object-cover h-full ' />
                </div>

                <div className='p-2.5'>
                  {val.avalablity ? <p className='flex text-vs items-center text-green-500 -translate-x-2'><Dot /> Available</p>: <p className='flex text-vs items-center text-gray-500 mb-1.5'>Not Available</p>}
                <p className='text-vs sm:text-sm font-semibold'>{val.name}</p>
                <p className='text-vs text-gray-500'>{val.job}</p>
                </div>
              
            </div>
            )}
        </div>

        <button className='bg-gray-200 rounded-full py-2 px-8 text-sm mt-8'>more</button>
    </div>
  )
}

export default TopDoctorList