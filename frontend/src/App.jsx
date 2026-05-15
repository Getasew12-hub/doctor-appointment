import React, { useEffect, useState } from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import { Toaster } from 'react-hot-toast'

import Home from "./pages/public/Home"
import Navbar from "./controllers/Navbar"
import DoctorDetail from './pages/public/DoctorDetail'
import Footer from "./controllers/Footer"
import Layout from "./pages/public/Layout"
import DoctorsList from "./controllers/DoctorsList"
import GeneralDocors from './controllers/GeneralDocors'
import Gynecologist from './controllers/Gynecologist'
import Dermatologist from './controllers/Dermatologist'
import Pediatricians from './controllers/Pediatricians'
import Neurologist from './controllers/Neurologist'
import Gastroenterologist from './controllers/Gastroenterologist'
import About from './pages/public/About'
import Contact from './pages/public/Contact'
import Profile from './pages/users/ProfilePage'
import MyAppointments from './pages/users/AppointmentHistory'
import Login from './pages/users/Login'
import AdminLayout from "./pages/Admin/Layout"
import Dashboard from './pages/Admin/Dashboard'
 import { useLocation } from 'react-router-dom';
import AllAppointments from './pages/Admin/AllAppointments'
import AddDoctor from './pages/Admin/AddDoctor'
import ScrollToTop from './controllers/ScrollToTop'
import DoctorProfile from './pages/Doctor/ProfilePage'
import PatientList from './pages/Admin/Patients'
import DcotorDashboardLayout from "./pages/Doctor/Layout"
import DoctorDashboard from './pages/Doctor/DoctorDashboard'
import DoctorsAppointments from "./pages/Doctor/Appointments"
import DoctorsPatients from './pages/Doctor/PatientList'
import EmailVerify from './pages/users/EmailVerify'
 import userStore from './store/user'
import { Loader } from 'lucide-react'
import PasswordReset from './pages/users/PasswordReset'
import ForgetPassword from './pages/users/ForgetPassword'
import EmialVeficationSend from './pages/users/EmialVeficationSend'

function App() {
  
  const {user,checkuser,CheckAuth}=userStore();
   const [addminMobileOpen,setAddminMobileOpen]=useState(false);
  useEffect(() => {
    CheckAuth();
  },[CheckAuth]);
   
     const location=useLocation();
     const pathnameStart=location.pathname.split("/")[1];


 if (checkuser) return <div className='flex justify-center items-center h-screen '><Loader size={45} className='animate-spin'/></div>;
const userRole=user?.role;
const isverify= user?.role=="user" ? user?.isVerified :true;
  return (
    <div className='min-h-screen overflow-hidden'>
      <ScrollToTop />
      <Navbar setAddminMobileOpen={setAddminMobileOpen} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointment/:id' element={<DoctorDetail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<Profile/>}/>
        <Route path='/my-appointment' element={<MyAppointments/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/email-verify-send' element={<EmialVeficationSend/>}/>

        <Route path='/password-reset/:token' element={user ? <Navigate to="/"/>: <PasswordReset/>}/>
        <Route path="/email-verify" element={isverify ? <Navigate to="/"/>: <EmailVerify/>}/>
        <Route path='/login' element={user ?(isverify ? <Navigate to="/"/> :<Navigate to="/email-verify"/>): <Login/>}/>
      
        <Route path='/doctors' element={<Layout/>} >
             <Route index element={<DoctorsList/>}/>
             <Route path='general-physician' element={<GeneralDocors/>}/>
             <Route path='gynecologist' element={<Gynecologist/>}/>
             <Route path='pediatricians' element={<Pediatricians/>}/>
             <Route path='neurologist' element={<Neurologist/>}/>
             <Route path='dermatologist' element={<Dermatologist/>}/>
             <Route path='gastroenterologist' element={<Gastroenterologist/>}/>
        </Route>

        <Route path='/admin' element={<AdminLayout addminMobileOpen={addminMobileOpen} setOpen={setAddminMobileOpen}/>} >
            <Route index  element={<Dashboard/>}/>
             <Route path='appointments' element={<AllAppointments/>}/>
             <Route path='add-doctor' element={<AddDoctor/>}/>
             <Route path='doctors-list' element={<DoctorsList/>}/>
             <Route path='doctor/:id' element={<DoctorProfile/>}/>
             <Route path='patients' element={<PatientList/>}/>
          
        </Route>

        <Route path='doctor-dashboard' element={<DcotorDashboardLayout  addminMobileOpen={addminMobileOpen} setOpen={setAddminMobileOpen}/>}>
            <Route index element={<DoctorDashboard/>} />
            <Route path='appointments'  element={<DoctorsAppointments/>}/>
            <Route path='patients' element={<DoctorsPatients/>}/>
        </Route>
      </Routes>

    {pathnameStart!=="admin" && pathnameStart!=="doctor-dashboard" && pathnameStart!=="login" && pathnameStart!=="singup" && <Footer/>}  

      <Toaster/>
    </div>
  )
}

export default App