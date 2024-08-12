import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png";
// import Services from './Services';

const KnowTS = ({taskModel}) => {
 

    return (
        <div>
        <div className="flex flex-col items-center text-center p-10  rounded-lg m-5 relative z-10">
        <div className="flex mb-5">
       <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />  <h2 className="text-orange-500 text-xl mb-2" style={{fontSize:"20px"}}>
        {/* KNOW US BETTER */}
        {taskModel?.knowTSData?.subHeading}
        </h2>
       </div>
     
      <h2 className="font-bold mb-6  overflow-hidden  whitespace-normal w-[980px]" style={{fontSize:"46px"}}>
        {/* Discover Our Adaptive Task-Based Model For Dynamic IT Support */}
        {taskModel?.knowTSData?.heading}
        </h2>
      <p className="text-base text-gray-600 mb-6">
      {/* Experience our commitment to excellence through the Task-Based Model. We take full responsibility for delivering tailored solutions that<br/> meet your specific IT requirements with precision and efficiency. Partner with us to leverage expert guidance that propels your business forward. */}
      {taskModel?.knowTSData?.descriptionText}
      </p>
    
    </div>
    <div className="flex items-center justify-center z-20">
        {/* <Services/> */}
    </div>
    </div>
    // </div>
    );
};

export default KnowTS;
