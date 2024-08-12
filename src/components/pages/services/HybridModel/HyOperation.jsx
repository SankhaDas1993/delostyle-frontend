import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import blogBorder from "../../../images/blogBorder.png"
import sideBorder from "../../../images/sideBorder.png"
import dottedBg from "../../../images/dottedBg.png"
import aboutListIcon from "../../../images/aboutListIcon.png"


export default function HyOperation({hybrid_data}){
    
    return(
     <div className="flex flex-row mt-10" style={{height: "42rem", overflow: "hidden"}}>
        <div className="h-full mt-5" style={{width: "520px"}}>
          <img src={sideBorder} alt="side-border" style={{height:"580px"}}/>
        </div>
        <div className="relative flex-col p-10 mx-10 mt-5 mb-2" >
          <img 
            src={blogBorder} 
            alt="blog-border-left" 
            className="absolute top-0 left-0" 
            style={{width: "248px", height: "213px"}} 
          />
         <div className="flex">
  <div className="flex-1 h-full p-5 mx-5 overflow-hidden">
    <div className="flex justify-start mb-5">
      <img src={bulbIcon} alt="bulb-icon" className="mr-3 bulb-icon" />
      <h2 className="overflow-hidden text-xl text-orange-500" style={{ fontSize: "20px" }}>{hybrid_data?.title}</h2>
    </div>
    <div className="overflow-hidden" >
      <p className="overflow-hidden  font-bold mb-5  whitespace-normal w-[990px]" style={{ fontSize: "46px" }}>
      {hybrid_data?.description}
      </p>

    </div>
    <div className="w-2/3 mb-5 overflow-hidden">
      <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
      {hybrid_data?.paragraphs[0]}
      </p>
      <p className="text-[#777777] mt-5" style={{ fontSize: "18px" }}>
      {hybrid_data?.paragraphs[1]}
      </p>
      <p className="text-[#777777] mt-5" style={{ fontSize: "18px" }}>
      {hybrid_data?.paragraphs[2]}
      </p>
     
    </div>
  </div>
  <div className="absolute right-[200px] top-[150px]">
  <img src={dottedBg} alt="side-dotted" style={{ width: "86px", height: "250px" }} />
  </div>
</div>
 <hr className="mx-0 mt-10 border-2 border-dashed opacity-20" style={{ borderColor: "#00274D", width: "65%" }} />
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