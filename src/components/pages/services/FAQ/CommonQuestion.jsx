import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import blogBorder from "../../../images/blogBorder.png"
import sideBorder from "../../../images/sideBorder.png"
import dottedBg from "../../../images/dottedBg.png"
import td1 from "../../../images/td1.png"
import td2 from "../../../images/td2.png"
import td3 from "../../../images/td3.png"
import Accordion2 from "./Accordion2";





export default function CommonQuestion(){


    
    return(
        <div className="flex flex-row items-center" style={{height: "70rem", overflow: "hidden"}}>
        <div className="h-[800px]  w-[200px]">
          <img src={sideBorder} alt="side-border" className="left-0 top-0 h-full"/>
        </div>
        <div className="relative flex items-center justify-center flex-col mb-2 p-20 mx-5 " >
          <img 
            src={blogBorder} 
            alt="blog-border-left" 
            className="absolute left-0 top-0" 
            style={{width: "248px", height: "213px"}} 
          />
         <div className="flex">
  <div className="h-full overflow-hidden flex-1">
    <div className="flex justify-start mb-5">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
      <h2 className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "20px" }}>FREQUENTLY ASKED QUESTIONS</h2>
    </div>
    <div className="overflow-hidden mb-1" >
      <p className="overflow-hidden mb-5 text-ellipsis font-bold mb-5 whitespace-normal w-[600px]" style={{ fontSize: "50px" }}>
      Common Other 
      Questions Addressed
      </p>
<Accordion2/>
    </div>
   

  </div>
  <div className=" absolute left-[960px] top-[180px]">
  <img src={dottedBg} alt="side-dotted" className="mx-10 w-[96px] h-[300px]" />
  </div>
</div>

          <img 
            src={blogBorder} 
            alt="blog-border-right " 
            className="absolute left-[950px] top-[550px] bottom-0 transform rotate-180" 
            style={{width: "248px", height: "213px"}} 
          />
        </div>
      </div>

    )
}