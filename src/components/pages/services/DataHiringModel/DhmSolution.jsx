import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import blogBorder from "../../../images/blogBorder.png"
import sideBorder from "../../../images/sideBorder.png"
import dottedBg from "../../../images/dottedBg.png"
import aboutListIcon from "../../../images/aboutListIcon.png"


export default function DhmSolution(){

  const listItems = [
    "Evaluation Services",
    "Development of Risk Free Models",
    "Perfect Skill Match",
    "Job Fit To Your Budget",
    "Flexibility Based On Requirement",
  ];
    
    return(
     <div className="flex flex-row mt-10" style={{height: "50rem", overflow: "hidden"}}>
        <div className="h-full mt-5" style={{width: "520px"}}>
          <img src={sideBorder} alt="side-border" className="h-50"/>
        </div>
        <div className="relative flex-col mb-2 p-10 mx-10 mt-5" >
          <img 
            src={blogBorder} 
            alt="blog-border-left" 
            className="absolute left-0 top-0" 
            style={{width: "248px", height: "213px"}} 
          />
         <div className="flex">
  <div className="h-full overflow-hidden flex-1 mx-5">
    <div className="flex justify-start mb-5">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
      <h2 className="text-orange-500 text-xl  overflow-hidden" style={{ fontSize: "20px" }}>DEDICATED HIRING MODEL</h2>
    </div>
    <div className="overflow-hidden" >
      <p className="overflow-hidden text-ellipsis font-bold mb-5" style={{ fontSize: "46px" }}>
      DHM Solutions For Your Company,<br/> Tailored IT Consulting Services
      </p>

    </div>
    <div className="overflow-hidden w-2/3 mb-5">
      <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
      Connect to our experts to know more about Dedicated Hiring Model (DHM)
      </p>
      <p className="text-[#777777]" style={{ fontSize: "18px" }}>
      At Delostyle Studio, we understand that businesses require tailored IT consulting services to meet their unique needs effectively. Our “Dedicated Hiring Model” is a solution designed to bridge the gap between your business’s aspirations and the expertise needed to turn those aspirations into reality.
      </p>


    </div>
    
    {listItems.map((item, index) => (
        <div className="flex justify-start mb-2" key={index}>
          <img src={aboutListIcon} alt="bulb-icon" className="about-icon mr-3" style={{height:"20px",width:"20px"}}/>
          <p className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "18px" }}>
            {item}
          </p>
        </div>
      ))}
  </div>
  <div className="absolute right-[200px] top-[160px]">
  <img src={dottedBg} alt="side-dotted" style={{ width: "96px", height: "300px" }} />
  </div>
</div>
 <hr className="mt-5 border-dashed border-2 opacity-20 mx-0" style={{ borderColor: "#00274D", width: "65%" }} />
          <img 
            src={blogBorder} 
            alt="blog-border-right " 
            className="absolute right-[120px] bottom-[120px] transform rotate-180" 
            style={{width: "248px", height: "213px"}} 
          />
        </div>
      </div>

    )
}