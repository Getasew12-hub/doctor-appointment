import React from 'react';

const MyAppointments = () => {
  // Data modeled after image_060bbc.png
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Richard James",
      image: "/topdoctor/image1.png",
      specialty: "General physician",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25, July, 2024 | 8:30 PM",
      status: "pending", // Just to show the 'Cancel' option
    },
    {
      id: 2,
      doctor: "Dr. Richard James",
      image: "/topdoctor/image2.png",
      specialty: "General physician",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25, July, 2024 | 8:30 PM",
      status: "unpaid",
    },
    {
      id: 3,
      doctor: "Dr. Richard James",
      image: "/topdoctor/image3.png",
      specialty: "General physician",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25, July, 2024 | 8:30 PM",
      status: "paid",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans min-h-[86vh]">
      <h1 className="text-xl font-medium text-gray-700 pb-4 border-b border-gray-200 mb-6">
        My Appointments
      </h1>

      <div className="space-y-6 ">
        {appointments.map((item) => (
          <div key={item.id} className="flex justify-between max-md:flex-col gap-4 max-md:gap-10 pb-6 border-b border-gray-200 last:border-0 items-end max-md:items-center ">
            
            {/* Doctor Info Section */}
            <div className="flex gap-4">
              <img 
                src={item.image} 
                alt={item.doctor}
                className="w-24 h-32 bg-indigo-50 object-cover rounded-sm"
              />
              <div className="flex-1 text-sm space-y-1">
                <p className="text-lg font-semibold text-gray-800">{item.doctor}</p>
                <p className="text-gray-500">{item.specialty}</p>
                <div className="pt-2">
                  <p className="font-medium text-gray-700 underline decoration-gray-200 underline-offset-2">Address:</p>
                  <p className="text-gray-500">{item.address}</p>
                </div>
                <p className="pt-2">
                  <span className="font-medium text-gray-700">Date & Time: </span>
                  <span className="text-gray-500">{item.dateTime}</span>
                </p>
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className="flex flex-col gap-2 w-48">
              {item.status === 'unpaid' && (
                <button className="py-2 border border-transparent bg-main text-white rounded-md text-sm hover:bg-main transition-all">
                  Pay here
                </button>
              )}
              
              {item.status === 'paid' && (
                <button className="py-2 border border-gray-200 text-gray-400 rounded-md text-sm cursor-default">
                  Paid
                </button>
              )}

              <button className="py-2 border border-gray-200 text-gray-600 rounded-md text-sm hover:bg-red-500 hover:text-white transition-all">
                Cancel appointment
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;