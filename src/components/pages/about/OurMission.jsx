import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import ourmission1 from "../../images/ourmission1.png"
import ourmission2 from "../../images/ourmission2.jpg"
import "./about.css"




export default function OurMission(){

    const data2 = [
        { id: 1, title: "Client-Centric Solutions",desc:"Our foremost mission is to understand and address the unique challenges and opportunities of each client. We tailor innovative business solutions to meet your businesses specific needs, ensuring that technology becomes an enabler rather than an obstacle." },
        { id: 2, title: "Innovation and Expertise",desc:"We are on a relentless pursuit of excellence. Our mission is to stay at the cutting edge of technology and bring innovative solutions to the table. With our team of experts, we aim to provide the highest level of expertise to our clients." },
        { id: 3, title: "Long-Lasting Partnerships",desc:"Building enduring relationships is integral to our outsourcing services. We aim to become a trusted partner on your journey to success, offering continuous support, guidance, and solutions that evolve with your business." },
        {id:4,title:"Community Engagement",desc:"Our mission extends beyond the boardroom. We are committed to giving back to the communities we serve. Through educational initiatives and advanced knowledge, we strive to make a positive impact on society."},
        {id:5,title:"Sustainability",desc:"Delostyle Studio is dedicated to environmental and social responsibility. Our mission includes minimizing our ecological footprint and promoting sustainable practices through our business technology solutions in the tech industry."}
      ];
    
    
    return(
        <div
        className="consulting-banner relative flex overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${ourmission2})`,opacity:0.8 }}>
           
           <div 
          className="absolute inset-0 bg-[#B0BEC5]"
          style={{ opacity: 0.4, zIndex : -10}} 
        ></div>
      
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-20 text-white  p-5">
          <div className="w-3/4 mt-20 z-1">
            <div className="flex mb-5 items-center mt-10">
              <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
              <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>OUR MISSION</h2>
            </div>
           
            <div className="flex flex-col items-start">
              <h1 className="text-black overflow-hidden font-bold" style={{ fontSize: "44px" }}>
                Our Mission Is To Empower Business <br/> Success Through Innovative IT <br/>Consulting Solutions
              </h1>
              <p className="mt-1 overflow-hidden text-[#777777]" style={{ fontSize: "20px", padding: "20px 0" }}>
                At Delostyle Studio, our mission is to drive the success of businesses by harnessing the full potential that technology solutions have to offer. We are committed to providing top-notch IT consulting services that empower our clients to thrive in an ever-evolving digital landscape.
              </p>
              <p className="mt-1 overflow-hidden text-[#777777]" style={{ fontSize: "20px", padding: "20px 0" }}>
                In pursuing our mission, we seek to empower businesses to navigate the complexities of the digital world with confidence and efficiency. Together, we will transform challenges into opportunities, goals into achievements, and dreams into realities.
              </p>
              <p className="mt-1 overflow-hidden text-[#777777]" style={{ fontSize: "20px", padding: "20px 0" }}>
                Join us on this mission to redefine what’s possible in the world of IT consulting
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                {data2.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2"
                    style={{ height: "330px", width: "330px" }}
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
                    <p className="text-[#777777] mt-5 " style={{ fontSize: "16px" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <img src={ourmission1} alt="work-together-border" className="absolute top-20 right-2" style={{ width: '460px', height: '460px' }} />
            </div>
          </div>
        </div>
      </div> 
  

    )
}