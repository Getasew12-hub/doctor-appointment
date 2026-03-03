import { Mail, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Layout = ({addminMobileOpen,setOpen}) => {
     const leftSidebarRef = useRef();
     const navigate=useNavigate();
     const activePath=useLocation().pathname;
  
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


    const NavItem = ({ icon, label,link,path }) => (
  <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
    activePath==path ? 'bg-indigo-50 text-main border-r-4 border-main' : 'text-gray-500 hover:bg-gray-50'
  }`} onClick={() => CloseMobileOpenAndNavigate(link)} >
    <span>{icon}</span>
    {label}
  </button>
);


  return (
    <div className="flex  h-screen overflow-hidden bg-gray-50 font-sans">
      
      {/* Sidebar */}
      <aside className={`w-64 bg-white border-r border-gray-200 max-md:-translate-x-full flex  flex-col ${addminMobileOpen && "translate-x-0!"}  transition-transform duration-300 max-md:fixed max-md:inset-y-0 max-md:z-50 relative`} ref={leftSidebarRef}>
        <X size={18} className='absolute top-3 right-3 cursor-pointer md:hidden' onClick={()=>setOpen(false)} />

        <div className="p-6">
          <div className="flex items-center gap-2 text-main font-bold text-xl">
            <span className="p-1 bg-main text-white rounded">C</span> CareSlot
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon="🏠" label="Dashboard" link={"/admin"}  path={"/admin"}/>
          <NavItem icon="📅" label="Appointments" link={"appointments"}  path={"/admin/appointments"}/>
          <NavItem icon="➕" label="Add Doctor" link={"add-doctor"} path={"/admin/add-doctor"}/>
          <NavItem icon="👥" label="Doctors List" link={"doctors-list"} path={"/admin/doctors-list"}/>
          <NavItem icon={<Mail  size={19} />} label="Patients" link={"patients"} path={"/admin/patients"}/>
        </nav>
      </aside>
      <div className='h-full overflow-y-auto removeScrollVisiblity  w-full max-w-5xl pb-10 '>

       <Outlet />
      </div>
    </div>
  );
};


export default Layout;