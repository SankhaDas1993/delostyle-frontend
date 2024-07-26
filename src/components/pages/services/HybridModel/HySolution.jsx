import React from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import blogBorder from "../../../images/blogBorder.png"
import sideBorder from "../../../images/sideBorder.png"
import dottedBg from "../../../images/dottedBg.png"
import aboutListIcon from "../../../images/aboutListIcon.png"


export default function HySolution(){

  const listItems = [
    "Hour Based Services",
    "Development Of Risk Free Models",
    "Perfect Skill Match",
    "Fit To Your Budget",
    "Flexibility Based On Requirement",
  ];
    
    return(
     <div className="flex flex-row mt-10 mb-10" style={{height: "55rem", overflow: "hidden"}}>
        <div className="h-full mt-5" style={{width: "520px"}}>
          <img src={sideBorder} alt="side-border" style={{height:"810px"}}/>
        </div>
        <div className="relative flex-col mb-2 p-10 mx-10 mt-5" >
          <img 
            src={blogBorder} 
            alt="blog-border-left" 
            className="absolute left-0 top-0" 
            style={{width: "248px", height: "213px"}} 
          />
         <div className="flex">
  <div className="h-full overflow-hidden flex-1 mx-5">
    <div className="flex justify-start mb-5">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
      <h2 className="text-orange-500  overflow-hidden" style={{ fontSize: "20px" }}>HYBRID MODEL</h2>
    </div>
    <div className="overflow-hidden" >
      <p className="overflow-hidden text-ellipsis font-bold mb-5 whitespace-normal w-[826px]" style={{ fontSize: "40px" }}>
      Hybrid Model Solutions for Your Company, Integrated IT Consulting Services
      </p>

    </div>
    <div className="overflow-hidden w-2/3 mb-5">
      <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
      Connect to our experts to know more about Hybrid Model (HM)
      </p>
      <p className="text-[#777777] mt-5" style={{ fontSize: "18px" }}>
      Planning to run the entire IT solutions for your company. Focus on your business verticals and rely on us regarding all your IT and support needs. All your requirements can be handled by our specialized team members.
      </p>
      <p className="mt-5 text-[#777777]" style={{ fontSize: "18px" }}>
      Delostyle Studio proudly presents the “Hybrid Model” – a versatile approach that combines the strengths of different IT consulting services to meet your unique needs effectively. In an ever-evolving technological landscape, our Hybrid Model offers flexibility, innovation, and scalability to navigate the digital frontier.
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
  <div className="absolute right-[220px] top-[140px]">
  <img src={dottedBg} alt="side-dotted" style={{ width: "96px", height: "300px" }} />
  </div>
</div>
 <hr className="mt-20 border-dashed border-2 opacity-20 mx-0" style={{ borderColor: "#00274D", width: "65%" }} />
          <img 
            src={blogBorder} 
            alt="blog-border-right " 
            className="absolute right-[120px] bottom-[50px] transform rotate-180" 
            style={{width: "248px", height: "213px"}} 
          />
        </div>
      </div>

    )
}