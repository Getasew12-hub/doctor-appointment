import React from 'react';

const AboutUs = () => {
  const assets = {
    teamImage: "/image_08609f.jpg", // The image you uploaded earlier
  };

  return (
    <div className="max-w-vl mx-auto px-4 py-12 sm:px-6 lg:px-8 font-sans text-gray-600">
      
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-medium text-gray-500 uppercase tracking-widest">
          ABOUT <span className="text-gray-900 font-bold">US</span>
        </h2>
      </div>

   
      <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
    
        <div className="w-full md:w-1/3">
          <div className="w-full max-w-md mx-auto">
            <img 
              src={"/about.png"} 
              alt="Medical Team" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

       
        <div className="w-full md:w-2/3 space-y-6 text-sm leading-relaxed">
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. 
            At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor 
            appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our 
            platform, integrating the latest advancements to improve user experience and deliver superior service. 
            Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you 
            every step of the way.
          </p>
          <h3 className="text-gray-900 font-bold">Our Vision</h3>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the 
            gap between patients and healthcare providers, making it easier for you to access the care you need, when 
            you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h2 className="text-xl max-sm:lg font-medium text-gray-500 uppercase tracking-wide">
          WHY <span className="text-gray-900 font-bold">CHOOSE US</span>
        </h2>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 border border-gray-200">
        <FeatureCard 
          title="EFFICIENCY:" 
          description="Streamlined appointment scheduling that fits into your busy lifestyle." 
        />
        <FeatureCard 
          title="CONVENIENCE:" 
          description="Access to a network of trusted healthcare professionals in your area." 
        />
        <FeatureCard 
          title="PERSONALIZATION:" 
          description="Tailored recommendations and reminders to help you stay on top of your health." 
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0 hover:bg-main hover:text-white transition-all duration-300 group">
    <h4 className="font-bold text-gray-800 max-sm:text-xs mb-4 group-hover:text-white">{title}</h4>
    <p className="max-sm:text-xs leading-relaxed group-hover:text-blue-50">
      {description}
    </p>
  </div>
);

export default AboutUs;