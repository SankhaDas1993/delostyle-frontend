import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import ourmission1 from "../../../images/ourmission1.png"
import ourmission2 from "../../../images/ourmission2.jpg"
import howitwork  from "../../../images/howitwork.jpg"





export default function HowItWorks(){

    const data2 = [
        { id: 1, title: "Consultation",desc:"We start with a comprehensive consultation to understand your business goals and IT consulting requirements." },
        { id: 2, title: "Team Building",desc:"Based on your needs, we assemble a dedicated team of professionals with the right skillset and experience." },
        { id: 3, title: "Project Execution",desc:"Our dedicated team works collaboratively with you creating and offering IT consulting services that perfectly align with your project objectives." },
        {id:4,title:"Ongoing Support",desc:"We provide continuous support, regular updates, and transparent communication to ensure your project's success."},
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
              How Does DHM Works? 
              </h1>
              <p className="mt-1 overflow-hidden text-[#777777]" style={{ fontSize: "20px", padding: "20px 0" }}>
              The Dedicated Hiring Model (DHM) is designed to seamlessly integrate skilled professionals into your team. It begins with a thorough understanding of your business needs, followed by the selection of specialized experts in areas such as Development, Digital Marketing, Content Writing, non-voice BPO services, Graphic Designing, PPC, KPC, and more. This model offers flexibility, efficiency, and cost-effectiveness, ensuring your projects are delivered with precision and excellence.
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