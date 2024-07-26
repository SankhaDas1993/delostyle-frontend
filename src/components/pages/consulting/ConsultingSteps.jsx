import React from 'react';
import banner2 from "../../images/banner2.jpg";
import bulbIcon from "../../images/bulbIcon.png";
import bannerDots from "../../images/bannerDots.png"
import Stepper from './Stepper';

const ConsultingSteps = () => {
  return (
    <div 
      className="consulting-banner relative bg-blue-50 flex  bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${banner2})`, backgroundColor: "#00274D96", width: "1728px", height: "792px" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between  mx-20 text-white">
    
        <div className="items-start">
  <div className="flex  mb-10">
    <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
    <h2 className="text-orange-500 text-xl ml-4" style={{ fontSize: "20px" }}>OUR PROCESS</h2>
  </div>
  <div className="flex flex-col items-start ">
    <h1 className=" text-white overflow-hidden py-5" style={{ fontSize: "56px"}}>Steps Of Consulting</h1>

    <p className="text-gray-700 text-white mt-5 overflow-hidden" style={{ fontSize: "24px", padding: "25px 0" }}>We can help you with picking the best people for your company</p>
    <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-5" style={{fontSize:"20px"}}>Online Application</button>
  </div>
</div>
        
        <div className="w-full bg-opacity-50 rounded-lg flex  p-6 mx-5" style={{width:"120vh",height:"60vh",backgroundColor:"#FFFFED9C"}}>
        <img src={bannerDots} alt='dotted-bg' className="mt-20" style={{height:"288px",width:"96px"}}/>
          {/* <ul className="space-y-6 mx-10 mt-20">
        
            {[
              "Identify the business requirements",
              "Identify possible resources",
              "Developing the requirements",
              "Delivering the business solutions"
            ].map((step, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">{index + 1}</div>
                <span className="text-lg text-gray-800">{step}</span>
              </li>
            ))}
          </ul> */}
          <Stepper/>
        </div>
      </div>
    </div>
  );
};

export default ConsultingSteps;
