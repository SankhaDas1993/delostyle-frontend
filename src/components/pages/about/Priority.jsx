import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import priorityImg from "../../images/priorityImg.png"
import "./about.css"




export default function Priority(){


    
    return(
        <div 
  className="consulting-banner relative flex bg-center bg-no-repeat bg-cover mt-10 overflow-hidden"
  style={{
    background: 'linear-gradient(90.34deg, #00274D 0.80%, #005BB3 79.57%)',
    height: "550px"
  }}
>
  


      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-10 text-white">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-10 text-white gap-5 p-5">
      <div className="w-4/4  mt-5 ">
  <div className="flex flex-col items-start">
    <h1 className="text-white overflow-hidden py-2 font-bold" style={{ fontSize: "56px" }}>
    .Priority.Quality.Delivery
    </h1>
    <p className="mt-1 overflow-hidden" style={{ fontSize: "18px", padding: "20px 0" }}>
    #Make ourselves recognized as a brand.<br/>#Providing utmost priority to our client.<br/>#Furnishing timely delivery of projects.<br/>#Maintaining sheer quality of projects.
    </p>
    <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px" }}>Watch Story<FontAwesomeIcon icon={faPlay} className="mx-2" /></button>
  </div>
</div>


 </div>
 <img src={priorityImg} alt="work-together-border" className="mx-10  mt-4 right-0 left-40" style={{ width: '500px', height: '400px' }} />
  </div>
    </div>
    )
}