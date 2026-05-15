import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import doctorStore from '../../store/doctor';
import { Loader } from 'lucide-react';

const DoctorProfile = () => {
    const {GetDoctorProfile,loading,doctor}=doctorStore();
    const navigate = useNavigate();
    const {id}=useParams();
   useEffect(()=>{
    GetDoctorProfile(id);
   },[])

 
   if(loading) return <div className='flex justify-center items-center h-8/12 '><Loader size={45} className='animate-spin'/></div>; 

  if (!doctor) return <div className="p-8 text-center text-gray-500">Select a doctor to view details.</div>;

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen pb-10">
      <div className="max-w-5xl mx-auto flex flex-col  gap-8 lg:flex-row">
        
        {/* Left Side: Image */}
        <div className="w-full max-w-56 max-sm:mx-auto">
          <div className="bg-blue-50 rounded-xl overflow-hidden border border-blue-100">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full bg-white border  border-gray-200 rounded-xl p-6 md:p-10 relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">{doctor.name}</h2>
              <div className="flex flex-wrap items-center gap-2 mt-1 text-gray-600">
                <span>{doctor.education} - {doctor.speciality}</span>
                <span className="px-2 py-0.5 border border-gray-300 rounded-full text-xs">
                  {doctor.experience}
                </span>
              </div>
            </div>
            {/* Edit Button */}
            <button 
              onClick={()=>navigate("/admin/add-doctor",{state:{doctor}})}
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors text-sm font-medium max-sm:text-[10px] max-sm:px-4 max-sm:py-1 cursor-pointer"
            >
              Edit Profile
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-gray-800 font-medium mb-1">About</h3>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              {doctor.about}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-gray-800 font-medium">
              Appointment fee: <span className="text-gray-900">${doctor.fees}</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorProfile;