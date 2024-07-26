import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import visionsideImg from "../../images/visionSideImg.png"
import "./about.css"




export default function CreateSolution(){


    
    return(
        <div 
        className="consulting-banner relative flex bg-center bg-no-repeat bg-cover mt-10 overflow-hidden"
        style={{
          background: 'linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)',height:"550px"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40" ></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-20 text-white">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-20 text-white gap-10 p-5">
        <div className="w-4/4  mt-5 ">
    <div className="flex mb-5 items-center mt-2 h-10">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
      <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>OUR VISION</h2>
    </div>
    <div className="flex flex-col items-start">
      <h1 className="text-white overflow-hidden  font-bold" style={{ fontSize: "36px" }}>
      Create Solutions And Grow <br/>Your Business
      </h1>
      <p className="mt-1 overflow-hidden" style={{ fontSize: "18px", padding: "10px 0" }}>
      We can help you with picking out the best people for your company and its work.
  With new applications coming into the front line every day, it is vital that you stay high on the surge in this focused market. Our particular and expert group causes our customers to keep up this poise and peculiarity in this time of globalization.
      </p>
      <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px" }}>Read More</button>
    </div>
  </div>
  
  
   </div>
   <img src={visionsideImg} alt="work-together-border" className=" right-0 left-40" style={{ width: '560px', height: '560px' }} />
    </div>
      </div>
  

    )
}