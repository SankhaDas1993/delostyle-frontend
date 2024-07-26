import React from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import teamBanner2 from "../../images/teamBanner2.png"

const TeamBanner2 = () => {
  return (
    <div 
  className="consulting-banner relative  flex bg-center bg-no-repeat bg-contain"
  style={{ 
    backgroundImage: `linear-gradient(to right, #00274D 0%, #00274D60 30%), url(${teamBanner2})`,
    backgroundColor: "#00274D96",
    width: "1728px",
    height: "547px"
  }}
>
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-20 text-white">
    <div className="items-start h-full mt-20 p-10" style={{ width: "990px" }}> 
      <div className="flex mb-10">
        <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
        <h2 className="text-orange-500 text-xl ml-4" style={{ fontSize: "20px" }}>CAREERS</h2>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-white overflow-hidden py-2 font-bold mb-5" style={{ fontSize: "56px" }}>We Will Help Your Career Grow</h2>
        <p className="text-gray-700 text-white mt-5 overflow-hidden" style={{ fontSize: "20px"}}>We will work on your ideas and create the touchpoints to make sure of the high quality deliverables.</p>
        <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px" }}>View All Available Positions</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default TeamBanner2;
