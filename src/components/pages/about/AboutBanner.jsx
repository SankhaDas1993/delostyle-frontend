import React from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import aboutBanner from "../../images/aboutBanner.png"

const AboutBanner = () => {
  return (
    <div 
      className="consulting-banner relative bg-blue-50 flex bg-center bg-no-repeat bg-cover sm"
      style={{ backgroundImage: `url(${aboutBanner})`, backgroundColor: "#00274D96", width: "100%", height: "auto" }}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-5 md:mx-20 text-white">

        <div className="items-start h-full mt-10 md:mt-20 p-5 md:p-10 w-full md:w-3/4 lg:w-1/2">
          <div className="flex mb-5 md:mb-10">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
            <h2 className="text-orange-500 text-lg md:text-xl ml-2 md:ml-4">ABOUT DELOSTYLE STUDIO</h2>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-white overflow-hidden py-2 font-bold mb-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Elevate Your Ideas With Top IT Solutions</h1>
            <p className="text-gray-700 text-white mt-5 overflow-hidden text-lg md:text-xl lg:text-2xl">We are a dynamic organization and we provide the best in class service.</p>
            <button className="bg-orange-500 text-white py-2 px-4 md:px-6 rounded-full mt-5 md:mt-10 text-lg md:text-xl">Let's get together</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutBanner;
