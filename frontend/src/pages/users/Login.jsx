import React, { useState } from 'react';

const CreateAccount = () => {
    const [type, setType] = useState('login');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      {/* Auth Card */}
      <div className="w-full max-w-[400px] border border-gray-100 rounded-2xl p-8 shadow-2xl shadow-gray-200/50">
        
        <header className="mb-6">
            {type=="singup" ? <h1 className="text-2xl font-bold text-gray-800 mb-2">Singup</h1> : <h1 className="text-2xl font-bold text-gray-800 mb-2">Login</h1>}
         
          <p className="text-gray-500 text-sm">Please {type=="singup" ? "singup" : "login"} to book appointment</p>
        </header>

        <form className="space-y-4">
          {/* Full Name Input */}
        {type=="singup" && <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
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
            />
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full py-3 bg-main text-white rounded-md font-medium  transition-colors mt-2"
          >
            {type=="singup" ? "Singup" : "Login"}            
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