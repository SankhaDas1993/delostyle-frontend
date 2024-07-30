import React from "react";
import bulbIcon from "../../images/bulbIcon.png";
import ourwork1 from "../../images/ourwork1.png";
import ProjectGrid from "./ProjectGrid";
import "./about.css";

export default function OurWork() {
  return (
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-4 md:mx-20 text-white gap-10 p-5">
      <div className="w-full md:w-3/4 mt-20 z-1">
        <div className="flex mb-5 items-center mt-2">
          <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
          <h2 className="text-orange-500 text-lg md:text-xl" style={{ fontSize: "20px" }}>
            OUR WORK
          </h2>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-black overflow-hidden py-2 font-bold text-2xl md:text-4xl">
            Have A Look At Our Case Studies <br />Showcasing Proven Client Satisfaction
          </h1>
          <p className="mt-1 overflow-hidden text-[#777777] text-base md:text-lg py-5">
            Our team is dedicated to ensuring client satisfaction through hard work and innovative solutions. Our case studies highlight the success stories of our clients, showcasing how our best-in-class service has made a significant impact on their businesses.
          </p>
          <a
            href="/cases"
            className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10 text-base md:text-lg"
          >
            All Case Studies
          </a>
          <img
            src={ourwork1}
            alt="work-together-border"
            className="absolute top-20 right-20 hidden md:block"
            style={{ width: '193px', height: '193px' }}
          />
          <ProjectGrid />
        </div>
      </div>
    </div>
  );
}
