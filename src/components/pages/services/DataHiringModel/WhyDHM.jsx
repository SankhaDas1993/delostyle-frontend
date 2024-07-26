import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import ourmission1 from "../../../images/ourmission1.png"
import ourmission2 from "../../../images/ourmission2.jpg"
import dhmDotted from "../../../images/dhmDotted.png"





export default function WhyDHM(){

    const data2 = [
        { id: 1, title: "Customized Expertise",desc:"With this model, you have the freedom to access perfect tech solutions with our dedicated team that aligns perfectly with your project requirements. Whether you need a single specialist or a multi-disciplinary team, we've got you covered." },
        { id: 2, title: "Cost Efficiency",desc:"The Dedicated Hiring Model offers exceptional cost savings compared to traditional recruitment processes. You can tap into our talent pool without the overhead costs of hiring, training, and maintaining an in-house team." },
        { id: 3, title: "Flexible Engagement",desc:"Our consulting services encompasses various engagement models, including part-time, full-time, and project-based, ensuring that you have the flexibility to scale your team up or down as needed." },
        {id:4,title:"Industry Expertise",desc:"Our IT consulting experts are well-versed in the latest industry trends and technologies. They bring a wealth of knowledge and hands-on experience to your projects, ensuring top-notch results."},
        
      ];
    
    
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
              <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>WHY DHM</h2>
            </div>
           
            <div className="flex flex-col items-start">
              <h1 className="text-white overflow-hidden font-bold" style={{ fontSize: "56px" }}>
              Why Choose The Dedicated Hiring <br/>Model?
              </h1>
              <p className="mt-1 overflow-hidden text-white" style={{ fontSize: "20px", padding: "20px 0"}}>
              Our Dedicated Hiring Model (DHM) offers a flexible and client-centric approach to accessing a highly <br/>skilled team of IT professionals. This model is designed to provide cost-effective and efficient solutions <br/> tailored to meet your specific IT consulting needs.
              </p>
             
              <div className="flex gap-5 mt-10 mx-2 justify-items-center">
                {data2.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#00274D]  z-30 border relative p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2"
                    style={{ height: "380px", width: "260.0px" }}
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
                    <p className="text-[#777777] mt-5 z-30" style={{ fontSize: "16px", color: "white" }}>{item.desc}</p>
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