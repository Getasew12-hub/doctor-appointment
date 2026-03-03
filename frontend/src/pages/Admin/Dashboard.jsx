import React from 'react'

function Dashboard() {
      const metrics = [
    { icon: "👨‍⚕️", value: 14, label: "Doctors", color: "bg-blue-50" },
    { icon: "📅", value: 2, label: "Appointments", color: "bg-indigo-50" },
    { icon: "👥", value: 5, label: "Patients", color: "bg-blue-50" },
  ];

  const latestAppointments = Array(15).fill({
    name: "Dr. Richard James",
    date: "24th July, 2024"
  });
  return (
    <div>
      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1  gap-6 mb-8 max-sm:gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white p-6  rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 ">
              <div className={`w-12 h-12 ${m.color} rounded-lg flex items-center justify-center text-xl`}>
                {m.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{m.value}</p>
                <p className="text-gray-500 text-sm">{m.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Appointments List */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center gap-2 font-semibold text-gray-700">
            <span className="text-main">📄</span> Latest Appointment
          </div>
          
          <div className="divide-y divide-gray-50">
            {latestAppointments.map((appt, i) => (
              <div key={i} className="p-4 px-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <img src="/api/placeholder/40/40" alt="doc" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{appt.name}</p>
                    <p className="text-gray-400 text-xs italic">Booking on {appt.date}</p>
                  </div>
                </div>
                {/* <button className="w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-100 transition-colors">
                  ✕
                </button> */}
              </div>
            ))}
          </div>
        </section>
      </main></div>
  )
}

export default Dashboard