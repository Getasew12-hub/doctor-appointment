import React, { useEffect, useRef } from 'react';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Users,
  X
 
} from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';

const DoctorDashboard = ({addminMobileOpen,setOpen}) => {
    const leftSidebarRef = useRef();
    const navigate = useNavigate();
    const ActiveBar=useLocation().pathname

       useEffect(() => {
            const clickTriger=(e)=>{
                if(addminMobileOpen && leftSidebarRef.current && !leftSidebarRef.current.contains(e.target)){
                    setOpen(false);
                }
            }
            document.addEventListener("mousedown",clickTriger);
            return ()=>document.removeEventListener("mousedown",clickTriger);
        },[addminMobileOpen])
    
         function CloseMobileOpenAndNavigate(val){
     
        navigate(val);
           if(addminMobileOpen){
         setOpen(false);
        }
    }

    const NavItem = ({ icon, label, link, path }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
    ActiveBar=== path? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'
  }`} onClick={() => CloseMobileOpenAndNavigate(link)}>
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* 1. Sidebar */}
      <aside className={`w-64 bg-white border-r border-gray-200 flex flex-col max-md:-translate-x-full max-md:fixed max-md:inset-y-0 max-md:z-50 ${addminMobileOpen && "translate-x-0!"}  transition-transform duration-300 relative`} ref={leftSidebarRef}>
        <X size={18} className='absolute top-3 right-3 cursor-pointer md:hidden' onClick={()=>setOpen(false)} />
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold text-blue-600">CareSlot</h1>

        </div>
        <nav className="flex-1 p-4 space-y-2 ">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" path={"/doctor-dashboard"}   link="/doctor-dashboard" />
          <NavItem icon={<CalendarDays size={20}/>} label="Appointments" path="/doctor-dashboard/appointments" link="appointments" />
          <NavItem icon={<Users size={20}/>} label="Patients" path="/doctor-dashboard/patients" link="patients" />
        </nav>
      </aside>

      {/* 2. Main Content */}
      <main className="flex-1 max-sm:p-3 p-6 md:p-10 h-full overflow-y-auto removeScrollVisiblity ">
        
       <Outlet/>
 
      </main>
    </div>
  );
};

// Helper component for Sidebar items


export default DoctorDashboard;