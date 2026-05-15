import { BadgeCheck } from "lucide-react";
import React, { useState } from "react";
import {useLocation, useParams} from "react-router-dom"
import doctorStore from "../../store/doctor";
import { useEffect } from "react";
import { LargeLoading } from "../../utils/Loading";
import userStore from "../../store/user";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast";


const timeSlots = [
  "10:00 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "01:00 pm",
  "01:30 pm",
  "02:00 pm",
  "02:30 pm",
  "03:00 pm",
  "03:30 pm",
  "04:00 pm",
  "04:30 pm",
];
  let daySlots = [
    { day: "SUN" ,dayNum:7},
  { day: "MON" ,dayNum:1},
  { day: "TUE",dayNum:2},
  { day: "WED",dayNum:3 },
  { day: "THU" ,dayNum:4},
  { day: "FRI" ,dayNum:5},
  { day: "SAT" ,dayNum:6},

];

  const today=new Date();
 const  curentday=parseInt(today.getDate());
 let todaynumber=parseInt(today.getDay());
  for(let i=curentday;i<today.getDate()+7;i++){
     let daymonth=i;
     let dayinNumber=todaynumber;
        if(dayinNumber>7){
          dayinNumber=(dayinNumber%7);
        }

        if(i>30){
         daymonth=(daymonth%30);
        
       }
    
       const updatevalu= daySlots.map((pre)=>{
         
          
              if(pre.dayNum===dayinNumber){
                 if(pre.dayNum==today.getDay()){
                  return {
                     ...pre,
                  date:daymonth,
                  active:true
                  }
                 }
                return {
                  ...pre,
                  date:daymonth,
                }
              }
            return pre;
           })
          todaynumber++; 
         daySlots=updatevalu;
       console.log("the update value is this :::::::;",updatevalu)
  }
const relatedDoctors = [
  {
    name: "Dr. Timothy White",
    specialty: "Gynecologist",
    image: "/topdoctor/image2.png",
  },
  {
    name: "Dr. Ryan Martinez",
    specialty: "Gynecologist",
    image: "/topdoctor/image3.png",
  },
];

 function DoctorDetail() {
  const {user}=userStore();
  const navigate=useNavigate();
const [selectedDaySlots,setSelectedDaySlots]=useState(daySlots.find(pre=>pre.active==true));
const [selectedTime, setSelectedTime] = useState("10:00 am");
  
  const {GetReletedDoctors,loading,doctor}=doctorStore();
  const {state} = useLocation();
  const {id}=useParams();
  console.log("the state is this why this not work as expected:::",state);
  useEffect(() => {
   
    GetReletedDoctors(id,state?.speciality);
  },[])



function handleBooking (){
  if(!user){
    toast.error("Please first login or register",{position:"top-right"})
    navigate("/login")
  }
  console.log("the selected day slot is this :::",selectedDaySlots);
  console.log("the selected date number  :::",selectedTime);
}
  return (
    <div className="mx-auto  px-4 py-6 md:px-8 max-w-vl w-full ">
      {/* Top Doctor Card */}
      <section className="overflow-hidden rounded-lg border border-slate-300 bg-white">
        <div className="grid md:grid-cols-[280px_1fr]">
          <div className="flex items-end justify-center bg-main">
            <img
              src={state?.image}
              alt={state?.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5 md:pr-8">
            <h1 className="text-2xl font-semibold text-slate-800 md:text-3xl flex items-center gap-2">
              {state?.name} <span className="text-main "><BadgeCheck size={15} /></span>
            </h1>

            <p className="mt-1 text-sm text-slate-600">
             {state?.education}
              <span className="ml-2 rounded-full border border-slate-300 px-2 py-[2px] text-[11px] text-slate-500">
              {state?.experience}
              </span>
            </p>

            <h2 className="mt-4 text-sm font-semibold text-slate-800">About</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-600">
              {state?.about}
            </p>

            <p className="mt-4 text-sm font-semibold text-slate-800">
              Appointment fee: ${state?.fees}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Slots */}
      <section className="mt-8 md:ml-47.5">
        <h3 className="mb-4 text-sm font-medium text-slate-700">Booking slots</h3>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {daySlots.map((slot) => (
            <button
              key={`${slot.day}-${slot.date}`}
              onClick={()=>setSelectedDaySlots(slot)}
              className={`flex max-sm:h-10 max-sm:min-w-10 h-16 min-w-16 flex-col cursor-pointer items-center justify-center rounded-full border text-xs transition max-sm:text-[10px] ${
                slot.dayNum==selectedDaySlots.dayNum
                  ? "border-main bg-main text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-indigo-300"
              }`}
            >
              <span >{slot.day}</span>
              <span className="mt-1 text-sm font-semibold max-sm:text-vs">{slot.date}</span>
            </button>
          ))}
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {timeSlots.map((time) => {
            const active = selectedTime === time;
            return (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`h-8 min-w-20.5 rounded-full border px-3 text-xs transition cursor-pointer ${
                  active
                    ? "border-main bg-main/20 text-main"
                    : "border-slate-300 bg-white text-slate-500 hover:border-indigo-300"
                }`}
              >
                {time}
              </button>
            );
          })}
        </div>

        <button
         onClick={handleBooking}
         className="mt-4 h-10 min-w-55 rounded-full bg-main/90 px-6 text-sm font-medium text-white hover:bg-main cursor-pointer">
          Book an appointment
        </button>
      </section>

      {/* Related Doctors */}
      <section className="mt-14">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Related Doctors
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>
        {loading && <LargeLoading/>}
        {doctor?.length==0 && <p className='mt-5 text-center w-full '>Not data found</p>}
    
        <div className="mt-8 flex flex-wrap gap-4">
          {doctor?.length>0 &&   doctor?.map((doc) => (
            <article
              key={doc.name}
              className="w-[175px] overflow-hidden rounded-xl border border-blue-200 bg-white"
            >
              <div className="h-[150px] bg-blue-50 flex justify-center items-center ">
                 <img
                src={doc.image}
                alt={doc.name}
                className=" h-full object-cover"
              />
              </div>
            
              <div className="p-3">
                <p className="text-xs text-green-600">• Available</p>
                <h3 className="mt-1 text-lg font-medium text-slate-800">{doc.name}</h3>
                <p className="text-sm text-slate-500">{doc.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}


export default DoctorDetail;