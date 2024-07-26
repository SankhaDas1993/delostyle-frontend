import React from "react";
import bulbIcon from "../../images/bulbIcon.png";
import TypeCards from "./TypeCards";


export default function TypeOfService(){

    return(
        <>
            <div className="flex flex-col items-center text-center p-10 overflow-hidden  rounded-lg m-5 relative z-10">
        <div className="flex mb-5">
       <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />  <h2 className="text-orange-500 text-xl mb-2" style={{fontSize:"20px"}}>TYPES OF SERVICES</h2>
       </div>
     
      <h2 className="font-bold mb-4 overflow-hidden" style={{fontSize:"46px"}}>Be The Key Contributor To Innovation</h2>
      <p className="text-base text-gray-600 mb-6">
      We’re here to guide you in identifying which processes need attention and which do not. By focusing on areas that require care and optimizing those that don't, we help drive innovation and efficiency in your organization. Partner with us to unlock your full potential and lead the way in your industry.
      </p>
      <p className="text-base text-gray-600 mb-6">
        We are a group of industry professionals with a global mindset and a collaborative culture. 
        We work to understand your requirements and drive to make the overall business work in a smooth way.
      </p>
    
    </div>
    <div className="flex items-center justify-center z-20">
        <TypeCards/>
    </div>
        </>
    )
}