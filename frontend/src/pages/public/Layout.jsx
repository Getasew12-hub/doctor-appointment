import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {useNavigate,useLocation} from "react-router-dom"

const categories = [
  { name: "General physician", href: "general-physician" },
  { name: "Gynecologist", href: "gynecologist" },
  { name: "Dermatologist", href: "dermatologist" },
  { name: "Pediatricians", href: "pediatricians" },
  { name: "Neurologist", href: "neurologist" },
  { name: "Gastroenterologist", href: "gastroenterologist" },
 
];
 

 function Layout() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname.split("/")[2];
 

  return (
    <section className="mx-auto max-w-vl px-4 py-6 min-h-[85vh]">
      <p className="mb-4 text-sm text-slate-600">Browse through the doctors specialist.</p>

      <div className="grid gap-4 lg:grid-cols-[200px_1fr]">
        <aside className="space-y-2">
          {categories.map((cat,index) => {
            
            return (
              <button
                key={index}
                onClick={() => { navigate(cat.href);setSelectedCategory(cat.name)}}
                className={`w-full rounded-md border px-3 py-2 text-left max-sm:text-sm  transition ${
                  activePath===cat.href
                    ? "border-indigo-200 bg-indigo-100 text-main-700"
                    : "border-slate-300 bg-white text-slate-600 hover:border-indigo-200"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </aside>

         <Outlet/>
      </div>
    </section>
  );
}

export default Layout;