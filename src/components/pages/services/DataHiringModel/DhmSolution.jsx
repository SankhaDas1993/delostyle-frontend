import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import blogBorder from "../../../images/blogBorder.png";
import sideBorder from "../../../images/sideBorder.png";
import dottedBg from "../../../images/dottedBg.png";
import aboutListIcon from "../../../images/aboutListIcon.png";

export default function DhmSolution() {
  const listItems = [
    "Evaluation Services",
    "Development of Risk-Free Models",
    "Perfect Skill Match",
    "Job Fit To Your Budget",
    "Flexibility Based On Requirement",
  ];

  return (
    <div className="flex flex-col lg:flex-row mt-10" style={{ overflow: "hidden" }}>
      
      {/* Left Side Border Image */}
      <div className="hidden lg:block lg:w-[520px] h-full mt-5">
        <img src={sideBorder} alt="side-border" className="h-full" />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col mb-2 p-5 lg:p-10 mx-5 lg:mx-10 mt-10">
        
        {/* Top Left Blog Border Image */}
        <img
          src={blogBorder}
          alt="blog-border-left"
          className="absolute left-0 top-0 lg:hidden"
          style={{ width: "248px", height: "213px" }}
        />

        {/* Bottom Right Blog Border Image */}
        <img
          src={blogBorder}
          alt="blog-border-right"
          className="absolute lg:hidden right-0 bottom-10 transform rotate-180"
          style={{ width: "248px", height: "213px" }}
        />

        <div className="flex flex-col mt-10">
          <div className="flex items-center mb-5">
            <img
              src={bulbIcon}
              alt="bulb-icon"
              className="mr-3"
              style={{ width: "40px", height: "40px" }}
            />
            <h2
              className="text-orange-500 text-xl"
              style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            >
              DEDICATED HIRING MODEL
            </h2>
          </div>

          {/* Main Heading */}
          <div>
            <p
              className="font-bold mb-5"
              style={{ fontSize: "36px", lineHeight: "1.2", maxWidth: "100%" }}
            >
              DHM Solutions For Your Company,
              <br /> Tailored IT Consulting Services
            </p>
          </div>

          {/* Description */}
          <div className="w-full lg:w-2/3 mb-5">
            <p className="mb-2 text-[#777777]" style={{ fontSize: "16px" }}>
              Connect to our experts to know more about Dedicated Hiring Model (DHM)
            </p>
            <p className="text-[#777777] mb-10" style={{ fontSize: "16px" }}>
              At Delostyle Studio, we understand that businesses require tailored IT consulting
              services to meet their unique needs effectively. Our “Dedicated Hiring Model” is a
              solution designed to bridge the gap between your business’s aspirations and the
              expertise needed to turn those aspirations into reality.
            </p>
          </div>

          {/* List Items */}
          {listItems.map((item, index) => (
            <div className="flex items-center mb-2" key={index}>
              <img
                src={aboutListIcon}
                alt="about-icon"
                className="mr-3"
                style={{ height: "20px", width: "20px" }}
              />
              <p className="text-orange-500 text-lg" style={{ fontSize: "16px" }}>
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Dotted Background Image */}
        <div className="absolute hidden lg:block right-[10%] top-[160px]">
          <img src={dottedBg} alt="dotted-bg" style={{ width: "96px", height: "300px" }} />
        </div>

        <hr
          className="mt-24 border-dashed border-2 opacity-20 mx-0"
          style={{ borderColor: "#00274D", width: "65%" }}
        />

        {/* Bottom Right Blog Border Image */}
        <img
          src={blogBorder}
          alt="blog-border-right"
          className="absolute hidden lg:block right-0 bottom-10 transform rotate-180"
          style={{ width: "248px", height: "213px" }}
        />
      </div>
    </div>
  );
}
