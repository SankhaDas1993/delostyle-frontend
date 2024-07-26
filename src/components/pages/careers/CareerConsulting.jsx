import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import blogBorder from "../../images/blogBorder.png"
import sideBorder from "../../images/sideBorder.png"
import dottedBg from "../../images/dottedBg.png"
import aboutListIcon from "../../images/aboutListIcon.png"


export default function CareerConsulting(){

  const listItems = [
    "Great Environment",
    "Development of Skills",
    "Corporate Financial Security",
    "Job security",
    "Support and Maintenance",
  ];
    
    return(
     <div className="flex flex-row mt-20" style={{height: "50rem", overflow: "hidden"}}>
        <div className="h-full mt-5" style={{width: "520px"}}>
          <img src={sideBorder} alt="side-border" className="h-50"/>
        </div>
        <div className="relative flex-col mb-2 p-20 mx-10 mt-10" >
          <img 
            src={blogBorder} 
            alt="blog-border-left" 
            className="absolute left-0 top-0" 
            style={{width: "248px", height: "213px"}} 
          />
         <div className="flex">
  <div className="h-full overflow-hidden flex-1">
    <div className="flex justify-start mb-5">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
      <h2 className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "20px" }}>YOUR CAREER WITH US</h2>
    </div>
    <div className="overflow-hidden mb-1" >
      <p className="overflow-hidden text-ellipsis font-bold mb-5" style={{ fontSize: "50px" }}>
      Careers In Consulting
      </p>

    </div>
    <div className="overflow-hidden w-2/3 mb-10">
      <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
      Looking for Fun at Work! Join us to get the perfect environment and work culture.
      </p>
      <p className="text-[#777777]" style={{ fontSize: "18px" }}>
      We ensure healthy and safe environment for our employees. Providing all facility on time is our specialty. We have successfully created a team of experts along with a healthy environment. Keep following us to become a part of our team.
      </p>


    </div>
    
    {listItems.map((item, index) => (
        <div className="flex justify-start mb-2" key={index}>
          <img src={aboutListIcon} alt="bulb-icon" className="about-icon mr-3" style={{height:"20px",width:"20px"}}/>
          <p className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "18px" }}>
            {item}
          </p>
        </div>
      ))}
  </div>
  <div className="absolute right-[240px] top-[200px]">
  <img src={dottedBg} alt="side-dotted" style={{ width: "96px", height: "400px" }} />
  </div>
</div>
 <hr className="mt-24 border-dashed border-2 opacity-20 mx-0" style={{ borderColor: "#00274D", width: "65%" }} />
          <img 
            src={blogBorder} 
            alt="blog-border-right " 
            className="absolute right-[120px] bottom-[45px] transform rotate-180" 
            style={{width: "248px", height: "213px"}} 
          />
        </div>
      </div>

    )
}