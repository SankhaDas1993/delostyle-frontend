import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png";
// import Services from './Services';

const KnowPbm = () => {
 

    return (
        <div>
        <div className="flex flex-col items-center text-center p-10  rounded-lg m-5 relative z-10">
        <div className="flex mb-5">
       <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />  <h2 className="text-orange-500 text-xl mb-2" style={{fontSize:"20px"}}>KNOW US BETTER</h2>
       </div>
     
      <h2 className="font-bold mb-6  overflow-hidden" style={{fontSize:"46px"}}>Get to Know Our Comprehensive Project-Based <br/>  Model for Exceptional Service</h2>
      <p className="text-base text-gray-600 mb-6">
      Experience our commitment to excellence with our Project-Based Model (PBM). We stand by our services and take full responsibility for every line of code we write for our customers. Our PBM ensures that your projects are handled with precision, delivering high-quality results tailored to your specific needs. Partner with us to see how our expertise can drive your success.
      </p>
    
    </div>
    <div className="flex items-center justify-center z-20">
        {/* <Services/> */}
    </div>
    </div>
    // </div>
    );
};

export default KnowPbm;
