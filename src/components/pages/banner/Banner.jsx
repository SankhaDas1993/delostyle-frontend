import React from 'react';
import "./banner.css"
import bulbIcon from "../../images/bulbIcon.png"

const Banner = () => {
  return (
    <div className="hero-section bg-blue-50 flex items-center  h-screen relative overflow-hidden ">
      <div className="p-8  rounded-lg shadow-lg max-w-3xl relative z-10">
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
  <div>
  <div className="mx-10 mb-10">
  <div className="flex items-center mb-10">
    <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
    <h2 className="text-orange-500 text-xl ml-4" style={{ fontSize: "20px" }}>WELCOME TO DELOSTYLE STUDIO</h2>
  </div>
  <div className="flex flex-col items-start ">
    <h2 className="font-bold text-white overflow-hidden" style={{ fontSize: "88px", padding: "25px 0" }}>Your Vision</h2>
    <h2 className="font-bold text-white mt-5 overflow-hidden" style={{ fontSize: "88px", padding: "25px 0", margin: "5px 0" }}>Our Passion</h2>
    <p className="text-gray-700 text-white mt-5 overflow-hidden" style={{ fontSize: "24px", padding: "25px 0" }}>Consulting expertise that helps your business thrive</p>
    <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-5" style={{fontSize:"20px"}}>Let's get together</button>
  </div>
</div>

</div>

</div>

      </div>
      </div>
   
  );
};

export default Banner;
