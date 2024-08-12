import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png";
// import Services from './Services';

const KnowHy = ({hybrid_data}) => {
 

    return (
        <div>
        <div className="relative z-10 flex flex-col items-center p-10 m-5 text-center rounded-lg">
        <div className="flex mb-5">
       <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />  <h2 className="mb-2 text-xl text-orange-500" style={{fontSize:"20px"}}>{hybrid_data?.mainHeading}</h2>
       </div>
     
      <h2 className="font-bold mb-6  overflow-hidden  whitespace-normal w-[980px]" style={{fontSize:"46px"}}>{hybrid_data?.subHeading}</h2>
      <p className="mb-6 text-base text-gray-600">
      {hybrid_data?.descriptionText}
      </p>
    
    </div>
    <div className="z-20 flex items-center justify-center">
        {/* <Services/> */}
    </div>
    </div>
    // </div>
    );
};

export default KnowHy;
