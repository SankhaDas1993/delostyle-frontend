import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import ourmission1 from "../../../images/ourmission1.png"
import ourmission2 from "../../../images/ourmission2.jpg"
import howitwork  from "../../../images/howitwork.jpg"





export default function TsWorks({taskModel}){

    // const data2 = [
    //     { id: 1, title: "Task Definition",desc:"You define the specific task or project that requires IT consulting services, outlining your objectives and expectations." },
    //     { id: 2, title: "Consultation",desc:"Our IT experts collaborate with you to devise a strategy tailored to the task at hand, ensuring a comprehensive understanding of your needs." },
    //     { id: 3, title: "Task Execution",desc:"Our dedicated team works diligently to execute the task or project, leveraging their specialized skills." },
    //     {id:4,title:"Quality Assurance",desc:"We ensure that the task is completed to your satisfaction, providing a seamless and efficient experience."},
    // ]
    
    const data2 = taskModel?.tsWorksData?.data2
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
              <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>
                {/* HOW IT WORKS */}
                {taskModel?.tsWorksData?.subHeading}
                </h2>
            </div>
           
            <div className="flex flex-col items-start">
              <h1 className="text-black overflow-hidden font-bold" style={{ fontSize: "44px" }}>
              {/* How Does TBM Works? */}
              {taskModel?.tsWorksData?.mainHeading}
              </h1>
              <p className="mt-1 overflow-hidden text-[#777777]" style={{ fontSize: "20px", padding: "20px 0" }}>
              {/* In the Task-Based Model, you define the specific IT consulting task or project, outline your objectives, and collaborate with our experts to devise a tailored strategy. Our dedicated team then executes the task with specialized skills, ensuring rigorous quality assurance for a seamless, efficient experience. */}
              {taskModel?.tsWorksData?.descriptionText}
              </p>
             
              
              <div className="flex gap-10 justify-items-center">
                {data2?.map((item) => (
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