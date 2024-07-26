import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import aboutListIcon from "../../images/aboutListIcon.png"  
import "./about.css"




export default function WhoAreWe(){

    const listItems2 = [
        "Developing Business Solutions",
        "Program Modeling and Analytics",
        "Improving Your Business Planning",
        "Delivering Business Solutions",
        
      ];

    const data = [
        { id: 1, text: "We are able to give expert resources" },
        { id: 2, text: "Our team will lead your business to the goal" },
        { id: 3, text: "With you till the satisfaction is achieved" }
      ];
    
    return(
        <div className="h-full overflow-hidden flex">
        <div className="flex-1 p-5 mx-20 mt-10">
      <div className="flex justify-start mb-5">
        <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
        <h2 className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "20px" }}>WHO ARE WE</h2>
      </div>
      <div className="overflow-hidden mb-1">
        <p className="overflow-hidden text-ellipsis font-bold mb-5" style={{ fontSize: "40px" }}>
          Get to Know Us Better With <br /> Our Commitment to Quality
        </p>
      </div>
      <div className="overflow-hidden  mb-10">
        <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
          We bring your ideas to life through a meticulous process of development and refinement.
          We remain by our services and we are completely in charge of each of the code that we compose for our customers. Our dedication to excellence ensures that every piece of code we deliver is crafted with precision and integrity.
          <br /><br />
          Our team of skilled professionals stands by their work, guaranteeing that our solutions are robust, reliable, and tailored to meet your specific needs. By choosing us, you gain a trusted partner committed to your success, providing exceptional service and support every step of the way.
        </p>
      </div>
      {listItems2.map((item, index) => (
        <div className="flex justify-start mb-2" key={index}>
          <img src={aboutListIcon} alt="about-icon" className="about-icon mr-3" style={{ height: "20px", width: "20px" }} />
          <p className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "18px" }}>
            {item}
          </p>
        </div>
      ))}
      <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px" }}>Our Process</button>
    </div>
    
      <div className="relative flex flex-col items-center">
        <hr className="border-dashed border-2 opacity-20 mt-20" style={{ borderColor: "#00274D", height: "90vh", width: "2px" }} />
      </div>
      <div className="relative flex-1 p-5">
    
      <div className="flex flex-col items-center space-y-10 mt-20">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white p-5 shadow-lg rounded-lg flex flex-col items-start space-y-2"
          style={{ height: "200px", width: "320px" }}
        >
          <div
            className="flex items-center justify-center border-1 rounded-full font-bold"
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid #FF6600",
              backgroundColor: "rgba(255, 102, 0, 0.1)",
              color: "#FF6600",
            }}
          >
           <h2>{item.id}</h2> 
          </div>
          
          <p className="text-lg text-[#00274D] font-bold mt-4" style={{fontSize:"24px"}}>{item.text}</p>
        </div>
      ))}
    </div>
      </div>
    </div>
      
    )
}