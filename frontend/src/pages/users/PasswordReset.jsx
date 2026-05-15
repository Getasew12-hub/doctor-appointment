import React, { useState } from 'react';
import userStore from "../../store/user"
import { Loader } from 'lucide-react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const CreateAccount = () => {
  const {loading,SignupUser,LoginUser,UserPasswordReset}=userStore()
  
  const [formData, setFormData] = useState({

    password: '',
    confirmPassword: ''

  });
 const {token}=useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function hadleSubmite(e) {
    e.preventDefault();
    const password=formData.password.trim();
   const  confirmPassword=formData.confirmPassword.trim();
    if(password.length<6)return toast.error("Password must be at list 6 charactors",{position:'top-right'});

    if(password!==confirmPassword) return toast.error("Password not match",{position:'top-right'});

  await UserPasswordReset(password,token);

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
            <label className="text-sm font-medium text-gray-600">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-main transition-all"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Create a password"
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

export default CreateAccount;