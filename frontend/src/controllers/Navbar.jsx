import React, { useEffect, useRef, useState } from 'react'
import {Link,useLocation,useNavigate} from "react-router-dom"
import {ChevronDown, CircleUser, Contact, Home, Info, LogIn, LogOut, Menu, Users, X} from "lucide-react"
import MobileView from './MobileView';
import userStore from '../store/user';

const navLinks=[{
  name:"Home",
  link:"/"
},{
  name:"All Doctors",
  link:"/doctors"
},{
  name:"About",
  link:"/about"
},{
  name:"Contact",
  link:"/Contact"

}

]


function Navbar({setAddminMobileOpen}) {
  const {user:userinfo,LogoutUser}=userStore(state=>state);
  const admin=userinfo?.role==="admin";
  const doctor=userinfo?.role==="doctor";
  const user= userinfo?.role=="user" ? (userinfo?.isVerified ? userinfo : null) :userinfo;

  const navigate=useNavigate();
  const pathStart=useLocation().pathname.split("/")[1];
 

const [openMobileview,setOpenMobileview]=useState(false);




function handleMobileView(){
  setOpenMobileview(pre=> !pre);
}

  return (
    <div className='shadow  bg-main/5 '>

     

      <div className='flex w-full   max-w-vl mx-auto justify-between items-center gap-3 p-3 '>
        {(pathStart=="admin" ||  pathStart=="doctor-dashboard") && <button onClick={()=>setAddminMobileOpen(pre=>!pre)} className='md:hidden cursor-pointer '><Menu className='max-vs:h-5  max-vs:w-5  h-6 w-6 text-main'/></button>}

            <img src="/text-logo.png" alt="caresolt logo image" className='h-10 max-sm:h-8 cursor-pointer' onClick={()=>navigate("/")}/>


              <div className='flex gap-1.5 items-center'>

             {/* desktop and tablate view */}

            <div className='max-md:hidden flex gap-3'>
              {navLinks.map((link,index)=>(
                <Link key={index} to={link.link} className='hover:underline underline-offset-8 decoration-main' >{link.name}</Link>
              ))}
             {admin && <Link to={"/admin"} className='hover:underline underline-offset-8 decoration-main'>Dashboard</Link>}

             {doctor && <Link to={"/doctor-dashboard"} className='hover:underline underline-offset-8 decoration-main'>Dashboard</Link>}
             {!user && <button className='bg-main text-white py-0.5 px-3 rounded-full cursor-pointer text-sm' onClick={()=>navigate("/login")}>Login</button>}
            
            </div>

          {user && <div className=' w-24 flex justify-end relative group max-md:hidden'>
                  <button className="flex gap-1 items-center ">
                    <CircleUser />
                    <ChevronDown size={15}/>
                  </button>
                      <div className='absolute pt-8 hidden group-hover:block'>
                  <div className=' text-[13px] space-y-2 p-3 rounded-md shadow-lg border border-gray-200 z-50 bg-white font-medium  w-40 px-5 right-5 '>
                    <button className='cursor-pointer' onClick={()=>navigate("/my-profile")} >My Profile</button>
                    <button  className='cursor-pointer' onClick={()=>navigate("/my-appointment")}>My Appointments</button>
                   
                     <button  className='cursor-pointer' onClick={LogoutUser}>Logout</button>

                  </div>
                  </div>
                </div>}

               
          
            <button onClick={handleMobileView} className='md:hidden '><Menu className='max-vs:h-5  max-vs:w-5  h-6 w-6'/></button>
     

         </div>
        
      </div>

       {/* mobile view */}
   <MobileView handleMobileView={handleMobileView} openMobileview={openMobileview} setOpenMobileview={setOpenMobileview}/> 

      
      
    </div>
  )
}

export default Navbar