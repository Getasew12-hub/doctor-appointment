import React, { useState } from 'react';
import EditeProfile from '../../controllers/EditeProfile';


const UserProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
   const imageRef = React.useRef(null);

  // Mock data based on the provided image
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: "57th Cross, Richmond Circle, Church Road, London",
    gender: "Male",
    birthday: "20 July, 2024",
    image: "/topdoctor/image1.png" // image_07e8fc.png context
  });

  return  (
    <div className="max-w-2xl mx-auto p-6 md:p-10 font-sans text-gray-700">

      
      
      {/* Profile Header */}
    
      <div className="flex items-center gap-4 mb-6">
        <input type="file" accept='image/*' hidden ref={imageRef} />
        {userData?.image ?
        <div className='max-sm:w-20 max-sm:h-20 h-32 w-32 rounded-lg  bg-gray-100 flex justify-center items-center'>
               <img 
          src={userData.image} 
          alt="Profile" 
          className=" h-full object-cover"
          onClick={()=>isEdit && imageRef?.current.click()}
        />
        </div>
     
        :
        <div className="max-sm:w-20 max-sm:h-20 h-32 w-32 rounded-lg bg-indigo-50 flex items-center justify-center" onClick={()=>isEdit && imageRef?.current.click()}>
            <div className="w-10 h-10  bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-6 -6  text-indigo-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
            </div>
        </div>}
      </div>

     {!isEdit ?  <h1 className="text-3xl font-bold text-gray-900 mb-6">{userData.name}</h1>:
      <input type="text" name="name" className='text-3xl font-bold text-gray-900 mb-6 outline-none border-b' value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} required />}

      <hr className="border-gray-200 mb-8" />

      {/* Contact Information */}
      <section className="mb-10">
        <h2 className="text-sm font-semibold text-gray-400 underline decoration-gray-300 underline-offset-8 mb-6 uppercase tracking-wider">
          Contact Information
        </h2>
        
        <div className="grid grid-cols-[120px_1fr] gap-y-4 text-sm">
          <span className="font-medium text-gray-800">Email id:</span>
          {isEdit ?  <input type="email" name="email" id="email" className='outline-none border-b' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />:<span className="text-blue-500">{userData.email}</span>}
          
         
          <span className="font-medium text-gray-800">Phone:</span>
        {isEdit ?  <input type="text" name="phone" id="phone" className='outline-none border-b' value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />:<span className="text-blue-500">{userData.phone}</span>} 
          

          <span className="font-medium text-gray-800">Address:</span>
       {isEdit ?  <input type="text" name="address" id="address" className='outline-none border-b' value={userData.address} onChange={(e) => setUserData({ ...userData, address: e.target.value })}  required />:
          <span className="text-gray-500 leading-relaxed">
            {userData.address}
          </span>}
        </div>
      </section>

      {/* Basic Information */}
      <section className="mb-10">
        <h2 className="text-sm font-semibold text-gray-400 underline decoration-gray-300 underline-offset-8 mb-6 uppercase tracking-wider">
          Basic Information
        </h2>

        <div className="grid grid-cols-[120px_1fr] gap-y-4 text-sm">
          <span className="font-medium text-gray-800">Gender:</span>
        {isEdit ?  <select name="gender" id="gender" className='outline-none border-b' value={userData.gender} onChange={(e) => setUserData({ ...userData, gender: e.target.value })}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            
          </select>:
          <span className="text-gray-500">{userData.gender}</span>}

          <span className="font-medium text-gray-800">Birthday:</span>
         {isEdit ?  <input type="date" name="birthday" id="birthday" className='outline-none border-b' value={userData.birthday} onChange={(e) => setUserData({ ...userData, birthday: e.target.value })} required pattern="\d{4}-\d{2}-\d{2}" />:
          
          <span className="text-gray-500">{userData.birthday}</span>}
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-10">
        <button 
          onClick={() => setIsEdit(!isEdit)}
          className="px-10 py-2 border border-main text-main rounded-full hover:bg-indigo-50 transition-colors text-sm"
        >
          {isEdit ? 'Save information' : 'Edit'}
        </button>
        
        {isEdit && (
          <button 
            className="px-10 py-2 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition-colors text-sm"
            onClick={()=>setIsEdit(false)}
          >
            Cancel
          </button>
        )}
      </div>

    </div>
  );
};

export default UserProfile;