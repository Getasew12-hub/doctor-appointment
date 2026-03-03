import React from 'react';

// Sample data representing the patient list
const patientsData = [
  { id: 1, name: 'Richard James', age: 28, date: '24 Jul 2024', time: '10:00 AM', doctor: 'Dr. Richard James', fees: '$50', status: 'Completed' },
  { id: 2, name: 'Richard James', age: 28, date: '24 Jul 2024', time: '10:00 AM', doctor: 'Dr. Richard James', fees: '$50', status: 'Pending' },
  { id: 3, name: 'Richard James', age: 28, date: '24 Jul 2024', time: '10:00 AM', doctor: 'Dr. Richard James', fees: '$50', status: 'Cancelled' },
  { id: 4, name: 'Richard James', age: 28, date: '24 Jul 2024', time: '10:00 AM', doctor: 'Dr. Richard James', fees: '$50', status: 'Completed' },
  { id: 5, name: 'Richard James', age: 28, date: '24 Jul 2024', time: '10:00 AM', doctor: 'Dr. Richard James', fees: '$50', status: 'Completed' },
];

const PatientList = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-medium text-gray-700">All Patients</h2>
        </div>

        {/* Scrollable container for mobile responsiveness */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
                <th className="px-6 py-4 font-semibold">#</th>
                <th className="px-6 py-4 font-semibold">Patient</th>
                <th className="px-6 py-4 font-semibold">Age</th>
                <th className="px-6 py-4 font-semibold">Date & Time</th>
                <th className="px-6 py-4 font-semibold">Doctor</th>
                <th className="px-6 py-4 font-semibold">Fees</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {patientsData.map((patient, index) => (
                <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-500 text-sm">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                        {patient.name.charAt(0)}
                      </div>
                      <span className="text-gray-900 font-medium">{patient.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{patient.age}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {patient.date}, <span className="text-gray-400">{patient.time}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{patient.doctor}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium text-sm">{patient.fees}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                      ${patient.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                        patient.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 
                        'bg-red-100 text-red-600'}`}>
                      {patient.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Simple Pagination Placeholder */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
          <p>Showing 1 to {patientsData.length} of {patientsData.length} entries</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientList;