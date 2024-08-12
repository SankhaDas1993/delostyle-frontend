import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import howitwork  from "../../../images/howitwork.jpg"





export default function HyWorks({hybrid_data}){

    const data2 = [
        { id: 1, title: "Needs Assessment",desc:"We initiate the process by conducting a thorough assessment of your IT consulting needs, considering the scope, goals, and desired outcomes." },
        { id: 2, title: "Consultation and Strategy",desc:"Our IT experts collaborate to design a tailored strategy that combines the strengths of various services, ensuring a comprehensive approach." },
        { id: 3, title: "Task Assignment",desc:"We allocate tasks to the experts, leveraging their specialized skills in Digital Marketing, Content Writing, BPO services, Graphic Designing, PPC, KPC, and development and software services."},
        {id:4,title:"Integrated Execution",desc:"The Hybrid Model ensures seamless integration and execution, fostering synergy among different service components." }
    ]
    
    
    return(
        <div
        className="relative flex overflow-hidden bg-white bg-center bg-cover consulting-banner opacity-20"
        style={{ backgroundImage: `url(${howitwork})`,opacity:0.8 }}>
           
           <div 
          className="absolute inset-0 bg-white "
          style={{ opacity: 0.7, zIndex : -10}} 
        ></div>
      
        <div className="relative z-10 flex flex-col items-center justify-start p-5 mx-20 text-white md:flex-row">
          <div className="w-3/4 mt-20 z-1">
            <div className="flex items-center mt-10 mb-5">
              <img src={bulbIcon} alt="bulb-icon" className="mr-3 bulb-icon" />
              <h2 className="text-xl text-orange-500" style={{ fontSize: "20px" }}>HOW IT WORKS</h2>
            </div>
           
            <div className="flex flex-col items-start">
              <h1 className="overflow-hidden font-bold text-black" style={{ fontSize: "44px" }}>
              How Does the Hybrid Model Work?
              </h1>
              <p className="mt-1 overflow-hidden text-[#777777]" style={{ fontSize: "20px", padding: "20px 0" }}>
              In the Support Model, you identify your IT challenges, and our experts promptly engage to understand and assess the situation. We work diligently to resolve issues or provide expert guidance, ensuring your IT systems operate seamlessly. Additionally, we offer proactive maintenance to prevent future disruptions, maintaining smooth business operations.
              </p>
             
              
              <div className="flex gap-10 justify-items-center">
                {data2.map((item) => (
                    <div
                     key={item.id}
                     className="bg-white p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2 border border-[#D9D9D9] shadow-md"
                     style={{ height: "320px", width: "260px" }}
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