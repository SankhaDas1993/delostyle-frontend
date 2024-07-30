import React from 'react';
import banner2 from "../../images/banner2.jpg";
import bulbIcon from "../../images/bulbIcon.png";
import bannerDots from "../../images/bannerDots.png";
import Stepper from './Stepper';

const ConsultingSteps = () => {
  return (
    <div 
      className="consulting-banner relative bg-blue-50 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${banner2})`, backgroundColor: "#00274D96" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 text-white">

        <div className="lg:w-1/2 flex flex-col items-start mb-6 lg:mb-0">
          <div className="flex items-center mb-4">
            <img src={bulbIcon} alt="bulb-icon" className="h-8 w-8" />
            <h2 className="text-orange-500 text-lg lg:text-xl ml-4">OUR PROCESS</h2>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-white text-3xl lg:text-5xl py-3">Steps Of Consulting</h1>
            <p className="text-white text-lg lg:text-xl py-3">We can help you with picking the best people for your company</p>
            <button className="bg-orange-500 text-white py-2 px-4 lg:py-3 lg:px-6 rounded-full text-sm lg:text-lg mt-4">Online Application</button>
          </div>
        </div>

        <div className="flex  bg-opacity-50 rounded-lg p-6" style={{ backgroundColor: "#FFFFED9C" }}>
          <div className="hidden lg:block">
            <img src={bannerDots} alt='dotted-bg' className="mt-10 h-62 w-20" />
          </div>
          <Stepper />
        </div>
      </div>
    </div>
  );
};

export default ConsultingSteps;
