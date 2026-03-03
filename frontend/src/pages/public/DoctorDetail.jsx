import { BadgeCheck } from "lucide-react";
import React, { useState } from "react";

const daySlots = [
  { day: "WED", date: 25, active: true },
  { day: "THU", date: 26 },
  { day: "FRI", date: 27 },
  { day: "SAT", date: 28 },
  { day: "SUN", date: 1 },
  { day: "MON", date: 2 },
  { day: "TUE", date: 3 },
];

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
  const [selectedTime, setSelectedTime] = useState("10:00 am");

  return (
    <div className="mx-auto  px-4 py-6 md:px-8 max-w-vl w-full ">
      {/* Top Doctor Card */}
      <section className="overflow-hidden rounded-lg border border-slate-300 bg-white">
        <div className="grid md:grid-cols-[280px_1fr]">
          <div className="flex items-end justify-center bg-main">
            <img
              src="/topdoctor/image1.png"
              alt="Dr. Emily Larson"
              className="h-[210px] w-full object-contain"
            />
          </div>

          <div className="p-5 md:pr-8">
            <h1 className="text-2xl font-semibold text-slate-800 md:text-3xl flex items-center gap-2">
              Dr. Emily Larson <span className="text-main "><BadgeCheck size={15} /></span>
            </h1>

            <p className="mt-1 text-sm text-slate-600">
              MBBS - Gynecologist
              <span className="ml-2 rounded-full border border-slate-300 px-2 py-[2px] text-[11px] text-slate-500">
                3 Yrs
              </span>
            </p>

            <h2 className="mt-4 text-sm font-semibold text-slate-800">About</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-600">
              Dr. Davis has a strong commitment to delivering comprehensive medical
              care, focusing on preventive medicine, early diagnosis, and effective
              treatment strategies. Dr. Davis has a strong commitment to delivering
              comprehensive medical care, focusing on preventive medicine, early
              diagnosis, and effective treatment strategies.
            </p>

            <p className="mt-4 text-sm font-semibold text-slate-800">
              Appointment fee: $60
            </p>
          </div>
        </div>
      </section>

      {/* Booking Slots */}
      <section className="mt-8 md:ml-[190px]">
        <h3 className="mb-4 text-sm font-medium text-slate-700">Booking slots</h3>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {daySlots.map((slot) => (
            <button
              key={`${slot.day}-${slot.date}`}
              className={`flex max-sm:h-10 max-sm:min-w-10 h-16 min-w-16 flex-col items-center justify-center rounded-full border text-xs transition max-sm:text-[10px] ${
                slot.active
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
                className={`h-8 min-w-[82px] rounded-full border px-3 text-xs transition ${
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

        <button className="mt-4 h-10 min-w-[220px] rounded-full bg-main/90 px-6 text-sm font-medium text-white hover:bg-main/100">
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

        <div className="mt-8 flex flex-wrap gap-4">
          {relatedDoctors.map((doc) => (
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