import React from 'react';
import { Check, X } from 'lucide-react';
import doctorDashboradStore from '../../store/doctorDashboard';
import { useEffect } from 'react';
import { LargeLoading } from '../../utils/Loading';
const DoctorAppointments = () => {
const {loading,data,AllDoctorAppointments}=doctorDashboradStore();
useEffect(()=>{
  AllDoctorAppointments();
},[])
  const appointments = [
    { id: 1, patient: 'Richard James', age: 28, date: '24 Jul 2024', time: '10:00 AM', status: 'Pending', fees: '$50', img: 'https://i.pravatar.cc/150?u=a' },
    { id: 2, patient: 'Richard James', age: 28, date: '24 Jul 2024', time: '10:00 AM', status: 'Cancelled', fees: '$50', img: 'https://i.pravatar.cc/150?u=b' },
    { id: 3, patient: 'Richard James', age: 28, date: '24 Jul 2024', time: '10:00 AM', status: 'Completed', fees: '$50', img: 'https://i.pravatar.cc/150?u=c' },
    { id: 4, patient: 'Richard James', age: 28, date: '24 Jul 2024', time: '10:00 AM', status: 'Pending', fees: '$50', img: 'https://i.pravatar.cc/150?u=d' },
    { id: 5, patient: 'Richard James', age: 28, date: '24 Jul 2024', time: '10:00 AM', status: 'Completed', fees: '$50', img: 'https://i.pravatar.cc/150?u=e' },
  ];

  if(loading) return <LargeLoading/>;
  console.log("what happen in the comming data :::",data)
  return (
    <div className="p-6  bg-gray-50 min-h-screen max-sm:p-0">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl font-medium text-gray-700 mb-6">All Appointments</h1>

        <div className="bg-white border border-gray-200 rounded-xl overflow-y-hidden overflow-x-auto shadow-sm  ">
          {/* Table Header */}
         {data?.length!==0 ? <div className="hidden lg:grid grid-cols-[0.5fr_2fr_1fr_2fr_1fr_1fr] gap-4 p-4 bg-gray-50 border-b border-gray-100 text-sm font-semibold text-gray-600">
            <span>#</span>
            <span>Patient</span>
            <span>Age</span>
            <span>Date & Time</span>
            <span>Fees</span>
            <span className="text-center">Action</span>
          </div>:
          <p className='text-center my-4'>No data found</p>}

          {/* List Content */}
          <div className="divide-y divide-gray-200">
            {data?.length>0 && data?.map((item, index) => (
              <div 
                key={item.id} 
                className="grid grid-cols-1 lg:grid-cols-[0.5fr_2fr_1fr_2fr_1fr_1fr] gap-4 p-4 items-center hover:bg-gray-50 transition-colors"
              >
                {/* Mobile Labels are added for better UX on small screens */}
                <span className="hidden md:block text-gray-500">{index + 1}</span>
                
                <div className="flex items-center gap-3">
                  <img src={item.img} alt="" className="w-10 h-10 rounded-full border bg-blue-50" />
                  <span className="text-gray-900 font-medium">{item.patient}</span>
                </div>

                <div className="flex md:block gap-2">
                  <span className="md:hidden text-gray-400 text-sm font-medium">Age:</span>
                  <span className="text-gray-600">{item.age}</span>
                </div>

                <div className="flex md:block gap-2">
                  <span className="md:hidden text-gray-400 text-sm font-medium">Schedule:</span>
                  <span className="text-gray-600">{item.date}, {item.time}</span>
                </div>

                <div className="flex md:block gap-2">
                  <span className="md:hidden text-gray-400 text-sm font-medium">Fees:</span>
                  <span className="text-gray-900 font-medium">{item.fees}</span>
                </div>

                {/* Actions Section */}
                <div className="flex justify-center items-center gap-2">
                  {item.status === 'Pending' ? (
                    <>
                      <button className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition-all" title="Cancel Appointment">
                        <X size={20} />
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center bg-green-50 text-green-500 rounded-full hover:bg-green-100 transition-all" title="Complete Appointment">
                        <Check size={20} />
                      </button>
                    </>
                  ) : (
                    <span className={`text-sm font-medium px-4 py-1 rounded-full ${
                      item.status === 'Completed' ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'
                    }`}>
                      {item.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;