import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png";
// import Services from './Services';

const KnowSM = () => {
 

    return (
        <div>
        <div className="flex flex-col items-center text-center p-10  rounded-lg m-5 relative z-10">
        <div className="flex mb-5">
       <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />  <h2 className="text-orange-500 text-xl mb-2" style={{fontSize:"20px"}}>KNOW US BETTER</h2>
       </div>
     
      <h2 className="font-bold mb-6  overflow-hidden  whitespace-normal w-[980px]" style={{fontSize:"46px"}}>Discover Our Responsive Support Model For Dynamic IT Assistance</h2>
      <p className="text-base text-gray-600 mb-6">
      Experience our dedication to excellence through the Support Model. We assume full responsibility for delivering customized solutions that precisely meet your IT needs with efficiency and precision. Partner with us to harness expert guidance that drives continuous improvement and success for your business.
      </p>
    
    </div>
    <div className="flex items-center justify-center z-20">
        {/* <Services/> */}
    </div>
    </div>
    // </div>
    );
};

export default KnowSM;
