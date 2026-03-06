import React, { useState } from 'react';
import userStore from "../../store/user"
import { Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const {loading,ForgetPassword}=userStore()
  
  const [formData, setFormData] = useState("");

  const navigate=useNavigate()

  

 async function hadleSubmite(e) {
    e.preventDefault();

   const response = await ForgetPassword(formData);
   console.log("the user reslons is this ",response);
   if(response){
    navigate("/email-verify-send");
   }
   
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      {/* Auth Card */}
      <div className="w-full max-w-[400px] border border-gray-100 rounded-2xl p-8 shadow-2xl shadow-gray-200/50">
        
        <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h1> 
         
        
        </header>

        <form className="space-y-4" onSubmit={hadleSubmite}>
      
      

          {/* Password Input */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData}
              onChange={(e)=>setFormData(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-main transition-all"
              required
            />
          </div>
     

          {/* Action Button */}
          <button
          disabled={loading}
            type="submit"
            className={`w-full py-3 flex items-center justify-center bg-main text-white rounded-md font-medium  transition-colors mt-2 cursor-pointer ${loading && "opacity-50! cursor-not-allowed!"}`}
          >
            {loading ? <Loader size={23} className="animate-spin"/>:"Reset Password"}            
          </button>
        </form>

     
     
      </div>
    </div>
  );
};

export default ForgetPassword;