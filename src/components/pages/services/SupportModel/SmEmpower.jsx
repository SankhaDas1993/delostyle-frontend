import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import aboutBanner2 from "../../../images/aboutBnner2.png"
import empowerBanner from "../../../images/empowerBanner.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';


export default function SmEmpower(supportData) {
  // console.log(supportData.smEmpowerData.mainHeading,"supportDatasupportData")


  return (
    <div
      className="consulting-banner relative bg-blue-50 flex  bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${empowerBanner})`, backgroundColor: "#00274D96" }}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between  mx-20 text-white">

        <div className="items-start h-full mt-20 p-10" style={{ width: "990px" }}>
          <div className="flex mb-10">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
            <h2 className="text-orange-500 text-xl ml-4" style={{ fontSize: "20px" }}>MEET OUR EXPERTS</h2>
          </div>
          <div className="flex flex-col items-start">
            {/* <h2 className="text-white overflow-hidden py-2 font-bold mb-5  whitespace-normal w-[900px]" style={{ fontSize: "55px" }}>Driving Business Success With The Support Model</h2> */}
            <h2 className="text-white overflow-hidden py-2 font-bold mb-5  whitespace-normal w-[900px]" style={{ fontSize: "55px" }}>{supportData?.smEmpowerData?.mainHeading}</h2>
            
            {/* <p className="text-gray-700 text-white mt-5 overflow-hidden" style={{ fontSize: "24px"}}>Our experts are available to help your process run flawlessly. Get in touch with our experts and know more about Task Based Model.</p> */}
            <p className="text-gray-700 text-white mt-5 overflow-hidden" style={{ fontSize: "24px" }}>{supportData?.smEmpowerData?.descriptionText}</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px" }}>Watch Story<FontAwesomeIcon icon={faPlay} className="mx-2" /></button>
          </div>
        </div>


      </div>
    </div>
  )
}