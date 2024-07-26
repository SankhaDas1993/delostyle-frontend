import React from "react";
import bulbIcon from "../../images/bulbIcon.png";
import sideBorder from "../../images/sideBorder.png"; 
import blogBorder from "../../images/blogBorder.png";
import codes from "../../images/codes.png"
import textureBg from "../../images/textureBg.jpg"
import boss from "../../images/boss.jpg"
import signature from "../../images/signature.png"
import aboutListIcon from "../../images/aboutListIcon.png"


export default function Testimonial() {

    const listItems = [
        "Development Services",
        "Development of Business Models",
        "Corporate Model Advisory",
        "Data Structuring",
        "Feasibility Studies & Business Plan",
      ];

  return (
    <>
  <div 
  className="consulting-banner relative bg-blue-50 flex bg-center bg-no-repeat bg-cover"                  
  style={{ backgroundImage: `url(${textureBg})`, opacity: "0.9",minHeight: "1300px" }}
>
  <div 
    className="absolute inset-0 bg-[#B0BEC5]"
    style={{ opacity: 0.4, zIndex: -10 }} 
  ></div>
  <div className="relative bg-white rounded-lg mt-60 mx-auto z-1" style={{ height: "1000px", width: "900px" }}>
  <div className="absolute top-[-160px] left-1/2 transform -translate-x-1/2">
    <img
      src={boss}
      alt="Rajib Banerjee"
       className="profile-image rounded-full border-8 border-white bg-white"
      style={{ width: "280px", height: "280px" }}
    />
  </div>
  <div className="flex flex-col items-center justify-center h-full mt-5 p-2">
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center flex-col mx-10 p-10">
        <img 
          src={blogBorder} 
          alt="blog-border-left" 
          className="absolute left-0 top-0" 
          style={{ width: "248px", height: "213px" }} 
        />
        <div className="flex flex-col items-center w-full">
          <div className="h-full overflow-hidden flex-1">
            <div className="overflow-hidden  mb-10 mx-auto">
              <img src={codes} alt="codes" className="h-8 mt-4 mx-4" />
              <p className="text-gray-600 mx-20 text-[#000000]" style={{ fontSize: "32px"}}>
                We help our clients build agile products that can help business functions within the organization.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center author-container">
  <img src={signature} alt="sign" style={{height:"101px",width:"302px"}} /> 
  <p className="author-name font-bold text-2xl text-blue-900 my-2">Rajib Banerjee</p> 
  <p className="author-title text-xl text-[#777777]">DIRECTOR</p>
</div>

          </div>
        </div>
        <img 
          src={blogBorder} 
          alt="blog-border-right" 
          className="absolute right-[10px] bottom-0 transform rotate-180" 
          style={{ width: "248px", height: "213px" }} 
        />
      </div>
    </div>
    <hr className="mt-10  border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: "100%" }} />
    <div className="justify-start mx-20 p-10">
    <p className="text-[#777777]" style={{ fontSize: "18px" }}>
    Deloids are a group of people specialized in providing creative and diversified solution. We work to understand your issues and provide agile solutions based on your requirements.
      </p>

      {listItems.map((item, index) => (
        <div className="flex justify-start mt-3" key={index}>
          <img src={aboutListIcon} alt="bulb-icon" className="about-icon mr-3" style={{height:"20px",width:"20px"}}/>
          <p className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "18px" }}>
            {item}
          </p>
        </div>
      ))}
      </div>
  </div>
  
</div>

</div>


    </>
  );
}
