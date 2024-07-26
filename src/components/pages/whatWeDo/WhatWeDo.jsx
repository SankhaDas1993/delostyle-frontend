import React from "react";
import bulbIcon from "../../images/bulbIcon.png";
import sideBorder from "../../images/sideBorder.png"; 
import blogBorder from "../../images/blogBorder.png";
import dottedbg from "../../images/dottedBg.png"

export default function WhatWeDo() {
  return (
    <>
      <div className="flex flex-row items-center justify-center" style={{height: "900px", overflow: "hidden"}}>
        <div className="h-full mt-10" style={{width: "400px"}}>
          <img src={sideBorder} alt="side-border" className="left-0 top-0 h-full"/>
        </div>
        <div className="relative flex items-center justify-center flex-col mb-5 p-20 mx-5 " >
          <img 
            src={blogBorder} 
            alt="blog-border-left" 
            className="absolute left-0 top-0 " 
            style={{width: "248px", height: "213px"}} 
          />
         <div className="flex">
  <div className="h-full overflow-hidden flex-1">
    <div className="flex justify-start mb-5">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
      <h2 className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "20px" }}>WHAT WE DO</h2>
    </div>
    <div className="overflow-hidden mb-1" style={{ width: "1000px", height: "170px" }}>
      <p className="overflow-hidden text-ellipsis text-9xl h-[74px]" style={{ fontSize: "56px" }}>
        We Bring Your Vision To Life
      </p>
      <h2 className="mb-4 overflow-hidden" style={{ fontSize: "40px" }}>
        By Transforming Your Ideas
      </h2>
      <h2 className="mb-4 overflow-hidden" style={{ fontSize: "40px" }}>
        Into Reality
      </h2>
    </div>
    <div className="overflow-hidden w-2/3 mb-10">
      <p style={{ fontSize: "20px" }}>
        We bring your ideas to life through a meticulous process of development and refinement.
      </p>
      <p className="text-gray-600" style={{ fontSize: "20px" }}>
        Our team works closely with you to understand your vision and objectives, transforming your concepts into tangible, high-quality deliverables. By establishing key touchpoints throughout the project, we ensure that every detail aligns with your expectations. Our commitment to excellence guarantees that the final product not only meets but exceeds your standards, delivering results that make a lasting impact.
      </p>
    </div>
  </div>
  <div className="absolute right-[240px] top-[200px]">
  <img src={dottedbg} alt="side-dotted" style={{ width: "96px", height: "288px" }} />
  </div>
</div>

          <img 
            src={blogBorder} 
            alt="blog-border-right " 
            className="absolute right-[120px] bottom-0 transform rotate-180" 
            style={{width: "248px", height: "213px"}} 
          />
        </div>
      </div>
    </>
  );
}
