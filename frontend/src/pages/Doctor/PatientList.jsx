import React from 'react';
import { Mail, Phone, MoreVertical } from 'lucide-react';

const DoctorPatients = () => {
  // Mock data for patients specific to this doctor
  const patients = [
    { id: 'P-101', name: 'Richard James', gender: 'Male', age: 28, lastVisit: '24 Jul 2024', phone: '+1 234 567 890', img: 'https://i.pravatar.cc/150?u=p1' },
    { id: 'P-102', name: 'Richard James', gender: 'Female', age: 32, lastVisit: '22 Jul 2024', phone: '+1 234 567 891', img: 'https://i.pravatar.cc/150?u=p2' },
    { id: 'P-103', name: 'Richard James', gender: 'Male', age: 45, lastVisit: '20 Jul 2024', phone: '+1 234 567 892', img: 'https://i.pravatar.cc/150?u=p3' },
    { id: 'P-104', name: 'Richard James', gender: 'Female', age: 19, lastVisit: '18 Jul 2024', phone: '+1 234 567 893', img: 'https://i.pravatar.cc/150?u=p4' },
    { id: 'P-105', name: 'Richard James', gender: 'Male', age: 28, lastVisit: '15 Jul 2024', phone: '+1 234 567 894', img: 'https://i.pravatar.cc/150?u=p5' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen max-sm:p-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-medium text-gray-700">My Patients</h1>
          <div className="text-sm text-gray-500">Total Patients: {patients.length}</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="hidden lg:grid grid-cols-[1fr_2fr_1fr_1.5fr_1.5fr_0.5fr] gap-4 p-4 bg-gray-50 border-b border-gray-100 text-sm font-semibold text-gray-600">
            <span>Patient ID</span>
            <span>Patient Name</span>
            <span>Age / Gender</span>
            <span>Contact</span>
            <span>Last Visit</span>
            <span className="text-center">Action</span>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {patients.map((patient) => (
              <div 
                key={patient.id} 
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr_1.5fr_1.5fr_0.5fr] gap-4 p-4 items-center hover:bg-gray-50 transition-all"
              >
                {/* ID */}
                <span className="text-blue-600 font-medium text-sm">{patient.id}</span>

                {/* Name & Avatar */}
                <div className="flex items-center gap-3">
                  <img src={patient.img} alt="" className="w-10 h-10 rounded-full border border-gray-100" />
                  <span className="text-gray-900 font-medium">{patient.name}</span>
                </div>

                {/* Age / Gender */}
                <div className="text-gray-600 text-sm">
                  {patient.age} Yrs, {patient.gender}
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Phone size={14} className="text-gray-400" />
                    {patient.phone}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Mail size={14} className="text-gray-400" />
                    patient@email.com
                  </div>
                </div>

                {/* Last Visit */}
                <div className="text-gray-600 text-sm">
                  {patient.lastVisit}
                </div>

                {/* Action Menu */}
                <div className="flex justify-center">
                  <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatients;