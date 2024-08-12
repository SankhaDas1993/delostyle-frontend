import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import dhmDotted from "../../../images/dhmDotted.png"





export default function WhyHy({hybrid_data}){

    const data2 =hybrid_data?.data2;
    
    
    return(
        <div 
      className="relative flex mt-20 overflow-hidden bg-center bg-no-repeat bg-cover consulting-banner"
      style={{
        background: 'linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
           <div 
          className="absolute inset-0 bg-[#B0BEC5]"
          style={{ opacity: 0.4, zIndex : -10}} 
        ></div>
      
        <div className="relative flex flex-col items-center justify-start p-5 mx-20 text-white md:flex-row">
          <div className="mx-10 mt-20 ">
            <div className="flex items-center mt-10 mb-5">
              <img src={bulbIcon} alt="bulb-icon" className="mr-3 bulb-icon" />
              <h2 className="text-xl text-orange-500" style={{ fontSize: "20px" }}>{hybrid_data?.mainHeading}</h2>
            </div>
           
            <div className="flex flex-col items-start">
              <h1 className="overflow-hidden font-bold text-white" style={{ fontSize: "56px" }}>
            {hybrid_data?.subHeading}
              </h1>
              <p className="mt-1 overflow-hidden text-white" style={{ fontSize: "20px", padding: "20px 0"}}>
              {hybrid_data?.descriptionText}
              </p>
             
              <div className="flex gap-5 mx-2 mt-10 justify-items-center">
                {data2?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#00274D]  z-30 border relative p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2"
                    style={{ height: "360px", width: "260.0px" }}
                  >
                  <div className="absolute top-0 left-0 w-full h-full bg-white" style={{
                    opacity : 0.2
                  }} />
                    <div
                      className="z-40 flex items-center justify-center font-bold"
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "2px solid #FF6600",
                        backgroundColor: "rgba(255, 102, 0, 0.1)",
                        color: "#FF6600",
                        borderRadius: "50%",
                        position: "relative"
                      }}
                    >
                      <h2 style={{fontSize:"32px"}}>{item.id}</h2>
                    </div>
                    
                    <p className="text-lg text-[#00274D] font-bold mb-3 z-1" style={{ fontSize: "20px", color: "white" }}>{item.title}</p>
                    <p className="text-[#777777] mt-5 z-30" style={{ fontSize: "16px", color: "white" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <img src={dhmDotted} alt="work-together-border" className="absolute right-0 top-10 z-1" style={{ width: '500px', height: '420px' }} />
            </div>
          </div>
        </div>
      </div> 
      
  

    )
}