import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import dhmDotted from "../../../images/dhmDotted.png"

export default function WhySm({supportData}){

  console.log(supportData?.whySmData?.mainHeading,"supportDatasupportData")

    // const data2 = [
    //     { id: 1, title:"On-Demand Expertise",desc:"Our Support Model offers the flexibility to seek tech consulting services as and when you need them, providing solutions on an on-demand basis." },
    //     { id: 2, title:"Round-the-Clock Availability" ,desc:"Say goodbye to the burden of retaining a full-time IT team. You pay only for the specific tasks or projects you need assistance with, reducing unnecessary expenses." },
    //     { id: 3, title: "Swift Resolution",desc:"Need assistance with a particular project? Or a one-time consultation service on a critical matter is on your mind? Our experts are readily available to cater to your task-specific requirements." },
    //     {id:4,title:"Customized Assistance",desc:"Delostyle Studio's consultants boast comprehensive expertise, enabling us to address a wide range of IT challenges and projects."},
    //     ];
    const data2=supportData?.whySmData?.dataItems

    
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
              <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>WHY SM</h2>
            </div>
           
            <div className="flex flex-col items-start">
              {/* <h1 className="text-white overflow-hidden font-bold" style={{ fontSize: "56px" }}>
              Why Choose The Support Model?
              </h1> */}
              <h1 className="text-white overflow-hidden font-bold" style={{ fontSize: "56px" }}>
              {supportData?.whySmData?.mainHeading}
              </h1>

              {/* <p className="mt-1 overflow-hidden text-white" style={{ fontSize: "20px", padding: "20px 0"}}>
              Opt for our Support Model to benefit from flexible, on-demand tech consulting services designed to meet your unique business needs. With 24/7 availability, our experts ensure swift resolution of IT issues, from troubleshooting to critical advice. We provide customized assistance that aligns perfectly with your specific tech requirements, ensuring minimal disruptions and seamless operations for your business.
              </p> */}
              <p className="mt-1 overflow-hidden text-white" style={{ fontSize: "20px", padding: "20px 0"}}>
              {supportData?.whySmData?.descriptionText}
              </p>
             
              <div className="flex gap-5 mt-10 mx-2 justify-items-center">
                {data2?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#00274D]  z-30 border relative p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2"
                    style={{ height: "360px", width: "260.0px" }}
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