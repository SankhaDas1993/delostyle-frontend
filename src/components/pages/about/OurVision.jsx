import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import blogBorder from "../../images/blogBorder.png"
import sideBorder from "../../images/sideBorder.png"
import dottedBg from "../../images/dottedBg.png"
import aboutListIcon from "../../images/aboutListIcon.png"
import model1 from "../../images/model1.png"
import model2 from "../../images/model2.png"
import model3 from "../../images/model3.png"
import "./about.css"


export default function OurVision(){

  const listItems = [
    "Development Services",
    "Consulting Services",
    "Project Management",
    "Quality Assurance",
    "Support and Maintenance",
  ];
    
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
      <h2 className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "20px" }}>OUR VISION</h2>
    </div>
    <div className="overflow-hidden mb-1" >
      <p className="overflow-hidden text-ellipsis font-bold mb-5" style={{ fontSize: "50px" }}>
      Our Vision and Continuous Path <br/> To Progress
      </p>

    </div>
    <div className="overflow-hidden w-2/3 mb-10">
      <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
      We bring your ideas to life through a meticulous process of development and refinement. 
      </p>
      <p className="text-[#777777]" style={{ fontSize: "18px" }}>
      Delostyle Studio Private Limited has been incorporated in the year 2016. Our strength lies in our team of experts. Being a software development company, our only point of concern is to provide best in class solution for the clients.
      We do not create products to sell. We provide solutions to your business so that you can operate flawlessly. Our team of experts will provide you with a future proof solution so that you can concentrate on the growth of the business.
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

      <hr className="mt-10 mb-10  border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: "60%" }} />

      <div className="flex gap-20 mt-5 mb-10">
  <div className="text-center"> 
    <img src={model1} alt="model-icon" style={{ height: "150px", width: "150px" }} />
    <h2 className="text-orange-500 text-3xl font-bold mt-2">98%</h2>
    <p className="font-bold mt-1">Planning and<br />Modeling</p> 
  </div>
  <div className="text-center"> 
    <img src={model2} alt="model-icon" style={{ height: "150px", width: "150px" }} />
    <h2 className="text-orange-500 text-3xl font-bold mt-2">99%</h2> 
    <p className="font-bold mt-1">Business<br />Solutions</p> 
  </div>
  <div className="text-center"> 
    <img src={model3} alt="model-icon" style={{ height: "150px", width: "150px" }} />
    <h2 className="text-orange-500 text-3xl font-bold mt-2">95%</h2> 
    <p className="font-bold mt-1">Dedicated <br/>Resource Model</p>
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