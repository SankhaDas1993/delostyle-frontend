import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import aboutBanner2 from "../../../images/aboutBnner2.png"
import empowerBanner  from "../../../images/empowerBanner.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';


export default function HyEmpower({hybrid_data}){


    
    return(
        <div 
      className="relative flex bg-center bg-no-repeat bg-cover consulting-banner bg-blue-50"
      style={{ backgroundImage: `url(${empowerBanner})`, backgroundColor: "#00274D96"}}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-between mx-20 text-white md:flex-row">
    
      <div className="items-start h-full p-10 mt-20" style={{width:"990px"}}> 
  <div className="flex mb-10">
    <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
    <h2 className="ml-4 text-xl text-orange-500" style={{ fontSize: "20px" }}>{hybrid_data?.mainHeading}</h2>
  </div>
  <div className="flex flex-col items-start">
    <h2 className="text-white overflow-hidden py-2 font-bold mb-5  whitespace-normal w-[900px]" style={{ fontSize: "55px" }}>{hybrid_data?.subHeading}</h2>
    <p className="mt-5 overflow-hidden text-white text-gray-700" style={{ fontSize: "24px"}}>{hybrid_data?.descriptionText}

</p>
    <button className="px-6 py-2 mt-10 text-white bg-orange-500 rounded-full" style={{ fontSize: "20px" }}>Watch Story<FontAwesomeIcon icon={faPlay} className="mx-2" /></button>
  </div>
</div>

        
      </div>
    </div>
    )
}