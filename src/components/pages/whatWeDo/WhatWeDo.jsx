import React from "react";
import bulbIcon from "../../images/bulbIcon.png";
import sideBorder from "../../images/sideBorder.png";
import blogBorder from "../../images/blogBorder.png";
import dottedbg from "../../images/dottedBg.png";

export default function WhatWeDo() {
  return (
    <>
      <div className="flex flex-row items-center justify-center lg:h-[1015px] md:[883px] h-[1015px]" style={{ overflow: "hidden" }}>
        <div className="hidden lg:inline-block h-full mt-10" style={{ width: "300px" }}>
          <img src={sideBorder} alt="side-border" className="left-0 top-0 h-[790px] " />
        </div>
        <div className="relative flex items-center justify-center flex-col mb-5 p-5 md:p-10 lg:p-20 mx-5 md:mx-10 w-full">
          <img
            src={blogBorder}
            alt="blog-border-left"
            className="absolute left-0 top-0 w-[62px] md:w-[124px] h-[53px] md:h-[106px]"
          />
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="flex-1">
              <div className="flex justify-start mb-5">
                <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
                <h2 className="text-orange-500 text-lg md:text-xl mb-2" style={{ fontSize: "20px" }}>WHAT WE DO</h2>
              </div>
              <div className="mb-1">
                <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 whitespace-normal leading-relaxed">
                  We Bring Your Vision To Life
                  By Transforming Your Ideas Into Reality
                </h2>
              </div>
              <div className="w-full md:w-2/3 mb-10 mt-10">
                <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl mb-5 leading-relaxed" style={{ fontSize: "20px" }}>
                  We bring your ideas to life through a meticulous process of development and refinement.
                </p>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed" style={{ fontSize: "20px" }}>
                  Our team works closely with you to understand your vision and objectives, transforming your concepts into tangible, high-quality deliverables. By establishing key touchpoints throughout the project, we ensure that every detail aligns with your expectations. Our commitment to excellence guarantees that the final product not only meets but exceeds your standards, delivering results that make a lasting impact.
                </p>
              </div>
            </div>
            <div className="hidden lg:block absolute right-[130px] xl:right-[260px] top-[140px] xl:top-[280px]">
              <img src={dottedbg} alt="side-dotted" className="w-[25px] md:w-[55px] h-[85px] md:h-[150px]" />
            </div>
          </div>
          <img
            src={blogBorder}
            alt="blog-border-right"
            className="absolute right-0 md:right-[60px] xl:right-[120px] bottom-0 transform rotate-180 w-[63px] md:w-[124px] h-[63px] md:h-[110px]"
          />
        </div>
      </div>
    </>
  );
}
