import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-vl mx-auto px-4 py-16 sm:px-6 lg:px-8 font-sans">
      
     
      <div className="text-center mb-12">
        <h2 className="text-2xl font-medium text-gray-500 uppercase tracking-widest">
          CONTACT <span className="text-gray-900 font-bold">US</span>
        </h2>
      </div>

   
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
        
        
        <div className="w-full max-w-md">
          <img 
            src="/contact.png" 
            alt="Doctor with patient" 
            className="w-full h-auto shadow-sm"
          />
        </div>

       
        <div className="w-full max-w-sm space-y-8 text-gray-600">
          
        
          <section>
            <h3 className="text-lg font-bold text-gray-700 uppercase tracking-tight mb-4">
              OUR OFFICE
            </h3>
            <div className="space-y-1 text-[15px]">
              <p>54709 Willms Station</p>
              <p>Suite 350, Washington, USA</p>
            </div>
            <div className="mt-4 space-y-1 text-[15px]">
              <p>Tel: (415) 555-0132</p>
              <p>Email: careslot@gmail.com</p>
            </div>
          </section>

      
          <section>
            <h3 className="text-lg font-bold text-gray-700 uppercase tracking-tight mb-4">
              CAREERS AT PRESCRIPTO
            </h3>
            <p className="text-[15px] mb-6">
              Learn more about our teams and job openings.
            </p>
            
            <button className="border border-black px-8 py-4 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300">
              Explore Jobs
            </button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;