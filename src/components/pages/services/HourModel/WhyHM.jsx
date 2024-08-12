import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import ourmission1 from "../../../images/ourmission1.png"
import ourmission2 from "../../../images/ourmission2.jpg"
import dhmDotted from "../../../images/dhmDotted.png"





export default function WhyHM({hourModel}){

    // const data2 = [
    //     { id: 1, title: "Flexibility Redefined",desc:"The Hour Model empowers you to control your IT consulting services budget with precision. Pay only for the hours you use, making it a cost-effective solution for businesses of all sizes." },
    //     { id: 2, title: "Instant Expertise",desc:"Whether you need quick advice, troubleshooting, or guidance, our team is just a click away. Our experts are available to assist you promptly, ensuring minimal disruptions to your operations." },
    //     { id: 3, title: "Scalability",desc:"Need more hours during a busy period? Or fewer hours during a lull? The Hour Model adapts to your evolving requirements, providing the scalability your business demands." },
    //     {id:4,title:"Expertise on Demand",desc:"Our consultants are at the top of their game, well-versed in the latest trends and technologies. When you choose the Hour Model, you're tapping into a wealth of IT consulting knowledge."},
        
    //   ];
      const data2 = hourModel?.whyHMData?.data2
    
    return(
        <div 
      className="consulting-banner relative flex bg-center bg-no-repeat bg-cover mt-20 overflow-hidden"
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
      
        <div className="relative flex flex-col md:flex-row items-center justify-start mx-20 text-white  p-5">
          <div className=" mt-20 mx-10">
            <div className="flex mb-5 items-center mt-10">
              <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
              <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>WHY HM</h2>
            </div>
           
            <div className="flex flex-col items-start">
              <h1 className="text-white overflow-hidden font-bold" style={{ fontSize: "56px" }}>
              {/* Why Choose The Hour Model? */}
              {hourModel?.whyHMData?.mainHeading}
              </h1>
              <p className="mt-1 overflow-hidden text-white" style={{ fontSize: "20px", padding: "20px 0"}}>
              {/* The Hour Model provides unparalleled flexibility and precision in IT consulting services, tailoring strategies <br/>to meet your specific needs. With dedicated experts and efficient resource management, the Hour Model <br/> optimizes costs while delivering top-notch results on schedule. Choose the Hour Model to streamline <br/> operations, foster innovation, and achieve outstanding outcomes efficiently. */}
             {hourModel?.whyHMData?.descriptionText}
              </p>
             
              <div className="flex gap-5 mt-10 mx-2 justify-items-center">
                {data2?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#00274D]  z-30 border relative p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2"
                    style={{ height: "370px", width: "260px" }}
                  >
                  <div className="bg-white absolute h-full w-full top-0 left-0" style={{
                    opacity : 0.2
                  }} />
                    <div
                      className="flex items-center z-40 justify-center font-bold"
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
                    <p className="text-[#777777] mt-10 z-30" style={{ fontSize: "16px", color: "white" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <img src={dhmDotted} alt="work-together-border" className="absolute top-10 right-0 z-1" style={{ width: '500px', height: '420px' }} />
            </div>
          </div>
        </div>
      </div> 
      
  

    )
}