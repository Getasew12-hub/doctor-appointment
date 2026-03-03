import React from 'react'

const doctors = [
  
  { id: 11, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image1.png" },
  { id: 12, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image2.png" },
  { id: 13, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image3.png" },
  { id: 14, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image4.png" },
  { id: 15, name: "Dr. Richard James", role: "General physician", image: "/topdoctor/image5.png" },

];


function Pediatricians() {
  return (
           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <article
              key={doctor.id}
              className="overflow-hidden rounded-md border border-blue-200 bg-white"
            >
              <div className='h-36 bg-blue-50 flex justify-center items-center overflow-hidden'>

                <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full object-contain"
              />
              </div>

              <div className="p-2.5">
                <p className="text-[10px] font-medium text-green-600">• Available</p>
                <h3 className="mt-1 text-sm font-medium text-slate-800">{doctor.name}</h3>
                <p className="text-[11px] text-slate-500">{doctor.role}</p>
              </div>
            </article>
          ))}
        </div>
  )
}

export default Pediatricians