import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import blogBorder from "../../../images/blogBorder.png"
import sideBorder from "../../../images/sideBorder.png"
import dottedBg from "../../../images/dottedBg.png"
import aboutListIcon from "../../../images/aboutListIcon.png"


export default function PbmOperation(){

  const listItems = [
    "Evaluation Services",
    "Development of Risk Free Models",
    "Perfect Skill Match",
    "Job Fit To Your Budget",
    "Flexibility Based On Requirement",
  ];
    
    return(
     <div className="flex flex-row mt-10" style={{height: "42rem", overflow: "hidden"}}>
        <div className="h-full mt-5" style={{width: "520px"}}>
          <img src={sideBorder} alt="side-border" style={{height:"580px"}}/>
        </div>
        <div className="relative flex-col mb-2 p-10 mx-2 mt-5" >
          <img 
            src={blogBorder} 
            alt="blog-border-left" 
            className="absolute left-0 top-0" 
            style={{width: "248px", height: "213px"}} 
          />
         <div className="flex">
  <div className="h-full overflow-hidden flex-1 mx-5 p-5">
    <div className="flex justify-start mb-5">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
      <h2 className="text-orange-500 text-xl  overflow-hidden" style={{ fontSize: "20px" }}>OPERATIONAL PROCESS</h2>
    </div>
    <div className="overflow-hidden" >
      <p className="overflow-hidden text-ellipsis font-bold mb-5" style={{ fontSize: "46px" }}>
      PBM Help Brands Adapt And <br/> Thrive In The Professional <br/> World
      </p>

    </div>
    <div className="overflow-hidden w-2/3 mb-5">
      <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
      We’re here to show you that the search for resource is over.
      </p>
      <p className="text-[#777777] mt-5" style={{ fontSize: "18px" }}>
      Our Project Based Model is a client-centric approach that focuses on delivering precise tech services that stand out to meet the demands of your unique projects. We understand that one-size-fits-all solutions never really works that well, and that’s where our expertise comes into play.
      </p>
     
    </div>
  </div>
  <div className="absolute right-[260px] top-[150px]">
  <img src={dottedBg} alt="side-dotted" style={{ width: "86px", height: "250px" }} />
  </div>
</div>
 <hr className="mt-10 border-dashed border-2 opacity-20 mx-0" style={{ borderColor: "#00274D", width: "65%" }} />
          <img 
            src={blogBorder} 
            alt="blog-border-right " 
            className="absolute right-[120px] bottom-[70px] transform rotate-180" 
            style={{width: "248px", height: "213px"}} 
          />
        </div>
      </div>

    )
}