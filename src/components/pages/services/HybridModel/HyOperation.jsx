import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import blogBorder from "../../../images/blogBorder.png"
import sideBorder from "../../../images/sideBorder.png"
import dottedBg from "../../../images/dottedBg.png"
import aboutListIcon from "../../../images/aboutListIcon.png"


export default function HyOperation(){
    
    return(
     <div className="flex flex-row mt-10" style={{height: "42rem", overflow: "hidden"}}>
        <div className="h-full mt-5" style={{width: "520px"}}>
          <img src={sideBorder} alt="side-border" style={{height:"580px"}}/>
        </div>
        <div className="relative flex-col mb-2 p-10 mx-10 mt-5" >
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
      <p className="overflow-hidden  font-bold mb-5  whitespace-normal w-[990px]" style={{ fontSize: "46px" }}>
      Hybrid Model Help Brands Adapt And Thrive In The Professional World
      </p>

    </div>
    <div className="overflow-hidden w-2/3 mb-5">
      <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
      We’re here to show you that the search for resource is over.
      </p>
      <p className="text-[#777777] mt-5" style={{ fontSize: "18px" }}>
      We’re here to show you that the search for resource is over.
      </p>
      <p className="text-[#777777] mt-5" style={{ fontSize: "18px" }}>
      Our Hybrid Model in Kolkata is a testament of our commitment to innovation and adaptability in IT consulting services. Whether you have a complex project or multifaceted IT requirements, our Hybrid Model offers the agility to blend and balance the right mix of services. Experience the power of versatile IT consulting with Delostyle Studio and unlock new dimensions of success in the digital age.
      </p>
     
    </div>
  </div>
  <div className="absolute right-[200px] top-[150px]">
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