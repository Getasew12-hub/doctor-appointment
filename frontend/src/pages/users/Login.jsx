import React, { useState } from 'react';
import userStore from "../../store/user"
import { Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const {loading,SignupUser,LoginUser}=userStore()
    const [type, setType] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function hadleSubmite(e) {
    e.preventDefault();
   if(type==="login"){
   
    LoginUser(formData)
    
   }else{
   
 
    SignupUser(formData)
   }
   
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      {/* Auth Card */}
      <div className="w-full max-w-[400px] border border-gray-100 rounded-2xl p-8 shadow-2xl shadow-gray-200/50">
        
        <header className="mb-6">
            {type=="singup" ? <h1 className="text-2xl font-bold text-gray-800 mb-2">Singup</h1> : <h1 className="text-2xl font-bold text-gray-800 mb-2">Login</h1>}
         
          <p className="text-gray-500 text-sm">Please {type=="singup" ? "singup" : "login"} to book appointment</p>
        </header>

        <form className="space-y-4" onSubmit={hadleSubmite}>
          {/* Full Name Input */}
        {type=="singup" && <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-main transition-all"
            />
          </div>}

          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-main transition-all"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Password</label>
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
          {/* forget password  */}
         {type=="login" && <div  className="text-sm text-right text-gray-600 ">  <Link to={"/forget-password"} className='cursor-pointer'> Forget password ?</Link></div> }
          {/* Action Button */}
          <button
          disabled={loading}
            type="submit"
            className={`w-full py-3 flex items-center justify-center bg-main text-white rounded-md font-medium  transition-colors mt-2 cursor-pointer ${loading && "opacity-50! cursor-not-allowed!"}`}
          >
            {loading ? <Loader size={23} className="animate-spin"/>:(type=="singup" ? "Singup" : "Login")}            
          </button>
        </form>

        {/* Footer Link */}
        {type=="singup" ? <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <span onClick={() => setType('login')} className="text-main font-medium underline cursor-pointer">
              Login here
            </span>
          </p>:
          <p className="mt-6 text-sm text-center text-gray-600">
           Create an new account?{' '}
            <span onClick={() => setType('singup')} className="text-main font-medium underline cursor-pointer">
              Singup here
            </span>
          </p>
                }
     
      </div>
    </div>
  );
};

export default CreateAccount;