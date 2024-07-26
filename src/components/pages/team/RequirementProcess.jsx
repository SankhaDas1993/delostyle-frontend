import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import dottedBg from "../../images/dottedBg.png"
import "./team.css"
 
export default function RequirementProcess(){

    return(
        <div className=" flex-row items-center justify-center" style={{ overflow: "hidden"}}>
        <div className="relative flex items-center justify-center flex-col mb-2 p-20 mx-5 " >
         <div className="flex">
  <div className="h-full overflow-hidden flex-1 ">
    <div className="flex justify-start mb-5">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
      <h2 className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "20px" }}>RECRUITMENT PROCESS</h2>
    </div>
    <div className="overflow-hidden mb-1 w-300 " >
      <p className="overflow-hidden text-ellipsis font-bold mb-5" style={{ fontSize: "50px" }}>
      Streamlined Recruitment Process For <br/>  Exceptional Talent Acquisition
      </p>
      <div className="overflow-hidden mb-10" style={{ width: "1000px" }}>
      <p className="mb-2 text-[#777777] " style={{ fontSize: "18px" }}>
      At Delostyle Studio, we excel at identifying and selecting top-tier talent tailored to your company's unique needs. <br/> Our recruitment process is designed to streamline the acquisition of exceptional candidates who will contribute to your organization's success.
      </p>

      <div className="timeline-container" style={{ width: "1000px" }}>
      <div className="timeline "                                                                                                                                                                                                                                                                >
        <div className="timeline-step">
          <div className="timeline-circle">1</div>
          <div className="timeline-text" style={{fontSize:"20px"}}>Identify the client Requirement</div>
        </div>
      
        <div className="timeline-step">
          <div className="timeline-circle">2</div>
          <div className="timeline-text mx-10" style={{fontSize:"20px"}}>Identify possible sources of manpower Supply</div>
        </div>
      
        <div className="timeline-step">
          <div className="timeline-circle">3</div>
          <div className="timeline-text mx-10" style={{fontSize:"20px"}}>Communicating the Information to client</div>
        </div>
       
        <div className="timeline-step">
          <div className="timeline-circle">4</div>
          <div className="timeline-text mx-10" style={{fontSize:"20px"}}>Receiving Application</div>
        </div>
      </div>
    </div>
<button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-40" style={{ fontSize: "20px" }}>Online Application</button>
<div className="absolute right-[100px] top-[50px]">
<img src={dottedBg} alt="side-dotted" style={{ width: "86px", height: "250px" }} />
   
    </div>
  </div>
    </div>
   
 
  </div>
</div>


        </div>
      </div>
    )
}