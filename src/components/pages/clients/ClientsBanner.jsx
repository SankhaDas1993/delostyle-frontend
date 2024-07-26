import React from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import clientBanner from "../../images/clientBanner1.png"

const ClientsBanner = () => {
  return (
    <div 
      className="consulting-banner relative bg-blue-50 flex  bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${clientBanner})`, backgroundColor: "#00274D96", width: "1728px", height: "592px" }}
    >
    
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between  mx-20 text-white">
    
      <div className="items-start h-full mt-5 p-10" style={{width:"990px"}}> 
  <div className="flex mb-0">
    <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
    <h2 className="text-orange-500 text-xl ml-4" style={{ fontSize: "20px" }}>OUR CLIENTS</h2>
  </div>
  <div className="flex flex-col items-start">
    <h2 className="text-white overflow-hidden py-2 font-bold mb-2" style={{ fontSize: "60px" }}>We Pride Ourselves On Exceeding Our Clients' Expectations</h2>
    <p className="text-gray-700 text-white mt-5 overflow-hidden" style={{ fontSize: "24px"}}>Our commitment to excellence has allowed us to build strong relationships with a diverse range of clients. Here, you can find some of the clients we have worked with.</p>
    <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px" }}>Lets get together</button>
  </div>
</div>

        
      </div>
    </div>
  );
};

export default ClientsBanner;
