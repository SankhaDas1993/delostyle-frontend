import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import blogBorder from "../../images/blogBorder.png"
import sideBorder from "../../images/sideBorder.png"
import dottedBg from "../../images/dottedBg.png"
import td1 from "../../images/td1.png"
import td2 from "../../images/td2.png"
import td3 from "../../images/td3.png"
import "./about.css"




export default function TechDriven(){


    
    return(
        <div className="flex flex-row items-center justify-center mt-20" style={{height: "75rem", overflow: "hidden"}}>
        <div className="h-full mt-5" style={{width: "600px"}}>
          <img src={sideBorder} alt="side-border" className="left-0 top-0 h-full"/>
        </div>
        <div className="relative flex items-center justify-center flex-col mb-2 p-20 mx-5 " >
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
      <h2 className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "20px" }}>TECH-DRIVEN EFFICIENCY</h2>
    </div>
    <div className="overflow-hidden mb-1" >
      <p className="overflow-hidden text-ellipsis font-bold mb-5" style={{ fontSize: "50px" }}>
      Driving Business Success <br/> Through Operational Excellence <br/>And Cutting-Edge Technology
      </p>

    </div>
    <div className="overflow-hidden w-2/3 mb-10">
      <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
      Operational processes are the backbone of any successful business, driving efficiency and effectiveness across all departments. At Delostyle Studio, we specialize in a project delivery model that seamlessly integrates strategy and cutting-edge technology into businesses. This approach not only enhances operational efficiency but also enables significant cost savings.
      </p>
      <p className="text-[#777777]" style={{ fontSize: "18px" }}>
      Our commitment to providing world-class technology solutions ensures that we offer feasible and cost-effective options tailored to meet your specific needs. We continually strive to stay updated with the latest advancements in technology, ensuring that our solutions are always at the forefront of innovation. By choosing us, you partner with a team dedicated to optimizing your operational processes and driving your business towards sustainable growth and success.
      </p>
    </div>
      <hr className="mt-10 mb-10  border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: "60%" }} />

      <div className="flex gap-20 mt-5 mb-10">
  <div className="text-center"> 
    <img src={td1} alt="model-icon" style={{ height: "150px", width: "150px" }} />
    <h2 className="text-orange-500 text-3xl font-bold mt-2">90%</h2>
    <p className="font-bold mt-1">World Class
    <br />Technology</p> 
  </div>
  <div className="text-center"> 
    <img src={td2} alt="model-icon" style={{ height: "150px", width: "150px" }} />
    <h2 className="text-orange-500 text-3xl font-bold mt-2">89%</h2> 
    <p className="font-bold mt-1">Operational<br />Efficiency</p> 
  </div>
  <div className="text-center"> 
    <img src={td3} alt="model-icon" style={{ height: "150px", width: "150px" }} />
    <h2 className="text-orange-500 text-3xl font-bold mt-2">95%</h2> 
    <p className="font-bold mt-1">Satisfaction <br/>Oriented</p>
  </div>
</div>

  </div>
  <div className="absolute right-[240px] top-[200px]">
  <img src={dottedBg} alt="side-dotted" style={{ width: "96px", height: "400px" }} />
  </div>
</div>

          <img 
            src={blogBorder} 
            alt="blog-border-right " 
            className="absolute right-[120px] bottom-0 transform rotate-180" 
            style={{width: "248px", height: "213px"}} 
          />
        </div>
      </div>

    )
}