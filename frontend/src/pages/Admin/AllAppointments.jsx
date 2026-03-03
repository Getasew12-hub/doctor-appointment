import React from 'react';

const AllAppointments = () => {
  const appointments = [
    { id: 1, patient: "Richard James", dept: "Richard James", age: 28, date: "24th July, 2024, 10:AM", doctor: "Dr. Richard James", fees: "$50" },
    { id: 2, patient: "Richard James", dept: "Richard James", age: 28, date: "24th July, 2024, 10:AM", doctor: "Dr. Richard James", fees: "$50" },
  ];

  return (
    <div className="p-8 max-sm:p-4 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-medium text-gray-800 mb-6">All Appointments</h1>
      
      <div className="bg-white border border-gray-500  rounded overflow-hidden shadow-sm  overflow-x-auto removeScrollVisiblity">
        <table className="w-full min-w-xl text-left text-sm text-gray-600  ">
          <thead className="bg-gray-100 border-b border-gray-500 b">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-700">#</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Patient</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Department</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Age</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Date & Time</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Doctor</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Fees</th>
              <th className="px-6 py-4 font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500 ">
            {appointments.map((appt, idx) => (
              <tr key={appt.id} className="hover:bg-gray-50 transition-colors ">
                <td className="px-6 py-4 ">{idx + 1}</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex-none bg-gray-200 overflow-hidden" />
                  <span className="font-medium text-gray-800">{appt.patient}</span>
                </td>
                <td className="px-6 py-4">{appt.dept}</td>
                <td className="px-6 py-4">{appt.age}</td>
                <td className="px-6 py-4">{appt.date}</td>
                <td className="px-6 py-4 flex items-center gap-2 ">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-none" />
                  {appt.doctor}
                </td>
                <td className="px-6 py-4">{appt.fees}</td>
                <td className="px-6 py-4 text-right ">
                  <button className="w-8 h-8 rounded-full bg-red-50 text-red-400 hover:bg-red-100 transition-colors">✕</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppointments;