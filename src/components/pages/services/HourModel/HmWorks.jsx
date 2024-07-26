import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import ourmission1 from "../../../images/ourmission1.png"
import ourmission2 from "../../../images/ourmission2.jpg"
import howitwork  from "../../../images/howitwork.jpg"





export default function HmWorks(){

    const data2 = [
        { id: 1, title: "Hourly Engagement",desc:"You decide how many consulting hours you require, and we allocate the experts accordingly." },
        { id: 2, title: "On-Demand Support",desc:"Contact us whenever you need assistance, guidance, or advice regarding your IT challenges." },
        { id: 3, title: "Immediate Response",desc:"Our team responds promptly, ensuring that your issues are addressed efficiently, and your questions are answered accurately." },
        {id:4,title:"Cost Transparency",desc:"With our Hour Model, you get full transparency in your tech services expenses, making it easy to manage your budget effectively."},
    ]
    
    
    return(
        <div
        className="consulting-banner bg-white opacity-20 relative flex overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${howitwork})`,opacity:0.8 }}>
           
           <div 
          className="absolute inset-0 bg-white "
          style={{ opacity: 0.7, zIndex : -10}} 
        ></div>
      
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-20 text-white  p-5">
          <div className="w-3/4 mt-20 z-1">
            <div className="flex mb-5 items-center mt-10">
              <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
              <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>HOW IT WORKS</h2>
            </div>
           
            <div className="flex flex-col items-start">
              <h1 className="text-black overflow-hidden font-bold" style={{ fontSize: "44px" }}>
              How Does The Hour Model Works?
              </h1>
              <p className="mt-1 overflow-hidden text-[#777777]" style={{ fontSize: "20px", padding: "20px 0" }}>
              The Hour Model offers flexible engagement where you decide on the consulting hours needed. Whether you require immediate support, guidance on IT challenges, or want transparency in tech service expenses, our model ensures prompt responses and efficient solutions. This approach allows you to manage your budget effectively while accessing specialized expertise tailored to your business needs.
              </p>
             
              
              <div className="flex gap-10 justify-items-center">
                {data2.map((item) => (
                    <div
                     key={item.id}
                     className="bg-white p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2 border border-[#D9D9D9] shadow-md"
                     style={{ height: "300px", width: "260px" }}
                    >
                    <div
                      className="flex items-center justify-center font-bold"
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "2px solid #FF6600",
                        backgroundColor: "rgba(255, 102, 0, 0.1)",
                        color: "#FF6600",
                        borderRadius: "50%",
                      }}
                    >
                      <h2 style={{fontSize:"32px"}}>{item.id}</h2>
                    </div>
                    
                    <p className="text-lg text-[#00274D] font-bold mb-3" style={{ fontSize: "20px" }}>{item.title}</p>
                    <p className="text-[#777777] mt-10 " style={{ fontSize: "16px" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              
            
            </div>
          </div>
        </div>
      </div> 
  

    )
}