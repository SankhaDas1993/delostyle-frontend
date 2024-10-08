import React from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import aboutBanner from "../../images/aboutBanner.png"

const AboutBanner = () => {
  return (
    <div 
      className="consulting-banner relative bg-blue-50 flex  bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${aboutBanner})`, backgroundColor: "#00274D96", width: "1728px", height: "792px" }}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between  mx-20 text-white">
    
      <div className="items-start h-full mt-20 p-10" style={{width:"990px"}}> 
  <div className="flex mb-10">
    <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
    <h2 className="text-orange-500 text-xl ml-4" style={{ fontSize: "20px" }}>ABOUT DELOSTYLE STUDIO</h2>
  </div>
  <div className="flex flex-col items-start">
    <h1 className="text-white overflow-hidden py-2 font-bold mb-5" style={{ fontSize: "88px" }}>Elevate Your Ideas With Top IT Solutions</h1>
    <p className="text-gray-700 text-white mt-5 overflow-hidden" style={{ fontSize: "24px"}}>We are a dynamic organization and we provide the best in class service.</p>
    <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px" }}>Lets get together</button>
  </div>
</div>

        
      </div>
    </div>
  );
};

export default AboutBanner;
