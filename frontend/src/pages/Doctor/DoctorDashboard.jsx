import React from 'react'
import { Wallet, 
  CheckCircle, 
  XCircle,
  CalendarDays, 
  Users
} from 'lucide-react';
function DoctorDashboard() {
      // Mock data for the dashboard stats
  const stats = [
    { label: 'Total Earnings', value: '$45,200', icon: <Wallet className="text-blue-600" />, bg: 'bg-blue-50' },
    { label: 'Appointments', value: '124', icon: <CalendarDays className="text-purple-600" />, bg: 'bg-purple-50' },
    { label: 'Patients', value: '89', icon: <Users className="text-orange-600" />, bg: 'bg-orange-50' },
  ];

  // Mock data for latest appointments
  const appointments = [
    { id: 1, patient: 'Richard James', date: '24 Jul 2024', status: 'Pending', img: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, patient: 'Richard James', date: '24 Jul 2024', status: 'Cancelled', img: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, patient: 'Richard James', date: '24 Jul 2024', status: 'Completed', img: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, patient: 'Richard James', date: '24 Jul 2024', status: 'Completed', img: 'https://i.pravatar.cc/150?u=4' },
    { id: 5, patient: 'Richard James', date: '24 Jul 2024', status: 'Completed', img: 'https://i.pravatar.cc/150?u=5' },
    { id: 1, patient: 'Richard James', date: '24 Jul 2024', status: 'Pending', img: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, patient: 'Richard James', date: '24 Jul 2024', status: 'Cancelled', img: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, patient: 'Richard James', date: '24 Jul 2024', status: 'Completed', img: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, patient: 'Richard James', date: '24 Jul 2024', status: 'Completed', img: 'https://i.pravatar.cc/150?u=4' },
    { id: 5, patient: 'Richard James', date: '24 Jul 2024', status: 'Completed', img: 'https://i.pravatar.cc/150?u=5' },
  ];
  return (
    <div>
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 max-sm:gap-3 ">
          {stats.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 ">
              <div className={`p-4 rounded-lg ${item.bg}`}>
                {item.icon}
              </div>
              <div>
                <p className="sm:text-2xl text-lg  font-bold text-gray-800">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Appointments Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-100 flex items-center gap-2">
            <CalendarDays className="text-blue-600" size={20} />
            <h2 className="text-lg font-medium text-gray-700">Latest Appointments</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <tbody className="divide-y divide-gray-50">
                {appointments.map((app,index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={app.img} alt="" className="w-10 h-10 rounded-full border border-gray-200" />
                        <div>
                          <p className="text-gray-900 font-medium">{app.patient}</p>
                          <p className="text-gray-400 text-xs font-light">Booking on {app.date}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {app.status === 'Pending' ? (
                        <div className="flex justify-end gap-2">
                          <button className="p-2 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition-colors">
                            <XCircle size={20} />
                          </button>
                          <button className="p-2 bg-green-50 text-green-500 rounded-full hover:bg-green-100 transition-colors">
                            <CheckCircle size={20} />
                          </button>
                        </div>
                      ) : (
                        <span className={`text-sm font-medium ${
                          app.status === 'Completed' ? 'text-green-600' : 'text-red-500'
                        }`}>
                          {app.status}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default DoctorDashboard