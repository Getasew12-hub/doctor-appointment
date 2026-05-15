import { ClipboardClock, Contact, Home, Info, LayoutDashboard, LogIn, LogOut, User, Users, X } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import userStore from '../store/user'


const navLinks=[{
  name:"Home",
  link:"/",
  icon:<Home size={19}/>
},{
  name:"All Doctors",
  link:"/doctors",
  icon:<Users size={19}/>
},{
  name:"About",
  link:"/about",
  icon:<Info size={19}/>
},{
  name:"Contact",
  link:"/Contact",
  icon:<Contact size={19}/>

}]

function MobileView({handleMobileView,openMobileview,setOpenMobileview}) {
    const {user,LogoutUser}=userStore(state=>state);
    const admin=user?.role==="admin";
    const mobileref=useRef();
    const naviage=useNavigate();


    useEffect(()=>{

  const closeMobilView=(e)=>{
      
    if(openMobileview && mobileref.current && !mobileref.current.contains(e.target)){
             setOpenMobileview(false);
            
    }
  }
  document.addEventListener("mousedown",closeMobilView);
  return ()=>document.removeEventListener("mousedown",closeMobilView);
},[openMobileview])

  return (
       <div className={`flex flex-col  max-w-[65%] w-full items-start px-10 gap-5 md:hidden fixed inset-y-0  right-0 p-3.5 bg-gray-100 max-vs:text-[13px] pt-15  ${openMobileview ? "translate-x-0" :"translate-x-full"} transition-transform duration-300 z-50`}  ref={mobileref}>
                <button className='absolute top-2.5 right-5 ' onClick={handleMobileView}><X/></button>
                {navLinks.map((link,index)=>(
                  <Link key={index}  onClick={handleMobileView} className='mobileview'  to={link.link}>{link.icon} {link.name}</Link>
                ))}
                {admin && <Link to="/admin" onClick={handleMobileView}  className='mobileview'><LayoutDashboard size={19} />Dashboard</Link>}

        {user &&<>    <Link to={"/Contact"} onClick={handleMobileView}  className='mobileview'><ClipboardClock size={19} />My Appointments</Link>
              <Link to={"/Contact"} onClick={handleMobileView}  className='mobileview'><User size={19} />My Profile</Link>
              </>
         }
           {user ? <button  className='mobileview cursor-pointer' onClick={()=>{handleMobileView(),LogoutUser()}}><LogOut size={19} />Logout </button>:<button  className='mobileview cursor-pointer' onClick={()=>{handleMobileView(),naviage("/login")}}><LogIn size={19}  />Login </button>}
       </div>
  )
}

export default MobileView