import React from 'react'
import { useState } from 'react';

function EditeProfile({profile}) {
    const [userProfile, setUserProfile] = useState(profile);
    const imageRef = React.useRef(null);
    
  return (
     <div className="max-w-2xl mx-auto p-6 md:p-10 font-sans text-gray-700">

      
      
      {/* Profile Header */}
      <form action="">
    
      <div className="flex items-center gap-4 mb-6">
        <input type="file" accept='image/*' hidden ref={imageRef} />
        {userProfile.image ? 
        <img 
          src={userProfile.image} 
          alt="Profile" 
          className="w-20 h-20 rounded-lg object-cover bg-gray-100 cursor-pointer"
          onClick={()=>imageRef?.current.click()}
        />:
       
        <div className="w-20 h-20 rounded-lg bg-indigo-50 flex items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm " onClick={()=>imageRef?.current.click()} >
                <svg className="w-6 h-6 text-indigo-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
            </div>
        </div>}
      </div>

      
       <input type="text" name="name" id=""  value={profile.name} className='text-3xl font-bold text-gray-900 mb-6 outline-none'/>
      <hr className="border-gray-200 mb-8" />

      {/* Contact Information */}
      <section className="mb-10">
        <h2 className="text-sm font-semibold text-gray-400 underline decoration-gray-300 underline-offset-8 mb-6 uppercase tracking-wider">
          Contact Information
        </h2>
        
        <div className="grid grid-cols-[120px_1fr] gap-y-4 text-sm">
          <span className="font-medium text-gray-800">Email id:</span>
          <span className="text-blue-500">{userProfile.email}</span>

          <span className="font-medium text-gray-800">Phone:</span>
          <span className="text-blue-500">{userProfile.phone}</span>

          <span className="font-medium text-gray-800">Address:</span>
          <span className="text-gray-500 leading-relaxed">
            {userProfile.address}
          </span>
        </div>
      </section>

      {/* Basic Information */}
      <section className="mb-10">
        <h2 className="text-sm font-semibold text-gray-400 underline decoration-gray-300 underline-offset-8 mb-6 uppercase tracking-wider">
          Basic Information
        </h2>

        <div className="grid grid-cols-[120px_1fr] gap-y-4 text-sm">
          <span className="font-medium text-gray-800">Gender:</span>
          <span className="text-gray-500">{userProfile.gender}</span>

          <span className="font-medium text-gray-800">Birthday:</span>
          <span className="text-gray-500">{userProfile.birthday}</span>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-10">
        <button 
          onClick={() => setIsEdit(!isEdit)}
          className="px-10 py-2 border border-main text-main rounded-full hover:bg-indigo-50 transition-colors text-sm"
        >
          Save
        </button>
        
        
          <button type='button'
            className="px-10 py-2 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition-colors text-sm"
          >
            Cancel
          </button>
        
      </div>
      </form>

    </div>
  )
}

export default EditeProfile