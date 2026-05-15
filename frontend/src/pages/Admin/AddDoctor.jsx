import React, { use, useState } from 'react';
import { Loader, Upload } from 'lucide-react';
import { useNavigate,useLocation } from 'react-router-dom';
import adminStore from '../../store/admin';

const AddDoctor = () => {
    const {doctor} = useLocation()?.state || {};
        const {loading,data,AddNewDoctor,DoctorDataUpdate}=adminStore();
 
  
    
  const [formData, setFormData] = useState({
    name: doctor?.name || '',
    speciality: doctor?.speciality || 'General physician',
    email:doctor?.email || '',
    education:doctor?.education || '',
    password:doctor?.password || '',
    experience:doctor?.experience || '1 Year',
    fees:doctor?.fees || '',
    address1:doctor?.address1 || '',
    address2:doctor?.address2 || '',
    about:doctor?.about || '',
    image: doctor?.image || '',
  });
 function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = reader.result;
        setFormData({ ...formData, image });
      };
      reader.readAsDataURL(file);
    }
 }
  const handleChange = (e) => {
    const {name}=e.target;
  
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 async function handleSubmite(e){
    e.preventDefault();
    console.log("i am call and work so ")
   
if(doctor){
await DoctorDataUpdate(formData,doctor._id);
}else{

 const response= await  AddNewDoctor(formData);
 if(response){
  setFormData({
    name: '',
    speciality: 'General physician',
    email: '',
    education: '',
    password: '',
    experience: '1 Year',
    fees: '',
    address1: '',
    address2: '',
    about:'',
    image:  '',
 });
 }
}


  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-10">
        <h2 className="text-xl font-medium text-gray-700 mb-8">{doctor ? 'Edit Doctor' : 'Add Doctor'}</h2>

        <form className="space-y-6" onSubmit={handleSubmite}>
          {/* Profile Picture Upload */}
          <div className="flex items-center gap-4 mb-8">
            <label htmlFor="image" className="cursor-pointer">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors overflow-hidden">
                 {formData?.image ? <img src={formData?.image} alt="doctor image"  className='h-full w-full object-cover'/>:
                <Upload className="text-gray-400" size={24} />}
              </div>
              <input type="file" id="image" hidden accept='image/*' onChange={handleImageUpload} />
            </label>
            <p className="text-gray-500 text-sm">Upload doctor<br />picture</p>

          
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Doctor name</label>
                <input 
                  type="text" name="name" placeholder="Name"
                  className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Doctor Email</label>
                <input 
                  type="email" name="email" placeholder="Your email"
                  className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all"
                  onChange={handleChange}
                  value={formData.email}
                  required

                />
              </div>

              <div >
                <label className="block text-sm text-gray-600 mb-1">Doctor Password</label>
                <div className='relative' >
                 {doctor &&<div className='absolute h-full w-full bg-gray-500/20 rounded-md cursor-not-allowed'></div>}
                <input 
                   readOnly={doctor}
                  type="password" name="password" placeholder="Password"
                  className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all "
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Experience</label>
                <select name='experience' className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 bg-white"
                  onChange={handleChange}
                  value={formData.experience}>
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Fees in $</label>
                <input 
                  type="number" name="fees" placeholder="Your fees"
                  className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all"
                  onChange={handleChange}
                  value={formData.fees}
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Speciality</label>
                <select name='speciality' className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 bg-white"
                  onChange={handleChange}
                  value={formData.speciality}
                >
                  <option>General physician</option>
                  <option>Dermatologist</option>
                  <option>Pediatricians</option>
                  <option>Gastroenterologist</option>
                  <option>Neurologist</option>
                  <option>Gynecologist</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Education</label>
                <input 
                  type="text" name="education" placeholder="Education"
                  className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all"
                  onChange={handleChange}
                  value={formData.education}
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Address</label>
                <input 
                  type="text" name="address1" placeholder="Address 1"
                  className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all mb-3"
                  onChange={handleChange}
                  value={formData.address1}
                  required
                />
                <label className="block text-sm text-gray-600 mb-1">Address(optional)</label>
                <input 
                  type="text" name="address2" placeholder="Address 2"
                  className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all"
                  onChange={handleChange}
                  value={formData.address2}
                />
              </div>
            </div>
          </div>

          {/* Bottom Full-Width Section */}
          <div className="mt-6">
            <label className="block text-sm text-gray-600 mb-1">About Doctor</label>
            <textarea 
              name='about'
              rows="5" 
              onChange={handleChange}
              value={formData.about}
              placeholder="write about Doctor"
              className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500 transition-all resize-none"
            ></textarea>
          </div>

          <button disabled={loading}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full text-sm font-medium transition-colors mt-4 cursor-pointer"
          >
          {loading  ? <Loader size={19} className='animate-spin'/>  :( doctor ? "Update" : "Add doctor")}
            
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;