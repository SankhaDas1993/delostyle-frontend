import React, {useState, useEffect} from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import blogBorder from "../../../images/blogBorder.png"
import sideBorder from "../../../images/sideBorder.png"
import dottedBg from "../../../images/dottedBg.png"
import aboutListIcon from "../../../images/aboutListIcon.png"


export default function PbmSolution({data,loading}){
  const [pbmSolutionData, setPbmSolutionData] = useState({})
  const [load, setLoading] = useState(loading)
  const listItems = [
    "Evaluation Services",
    "Development of Risk Free Models",
    "Perfect Skill Match",
    "Job Fit To Your Budget",
    "Flexibility Based On Requirement",
  ];
  useEffect(() => {
    setPbmSolutionData(data?.pbmSolutionData)
    setLoading(loading)
  }, [data])  
    return(
     <div className="flex flex-row mt-10 mb-10" style={{height: "50rem", overflow: "hidden"}}>
        <div className="h-full mt-5" style={{width: "520px"}}>
          <img src={sideBorder} alt="side-border" style={{height:"750px"}}/>
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
      <h2 className="text-orange-500  overflow-hidden" style={{ fontSize: "20px" }}>PROJECT BASED MODEL</h2>
    </div>
    <div className="overflow-hidden" >
      <p className="overflow-hidden text-ellipsis font-bold mb-5" style={{ fontSize: "40px" }}>
     {load ?"PBM Solutions for Your Company, <br/>Customized IT Consulting Services":pbmSolutionData?.mainHeading}
      </p>

    </div>
    <div className="overflow-hidden w-2/3 mb-5">
      <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
      {load ?" Connect to our experts to know more about Project Based Model (PBM)":pbmSolutionData?.descriptionText1}
      </p>
      <p className="text-[#777777] mt-5" style={{ fontSize: "18px" }}>
      {load ?"Even if you need to hire a single software engineer suitable for a certain task, finding one may take quite a lot of time and effort. At the same time, you will also have to help the new employee adapt to the team and onboard them, which may be quite difficult and time-consuming Our team exclusively stands out for identifying how every project is distinct, having its own set of challenges and objectives. Thus we came up with this model that’s perfectly designed to provide you with the flexibility and expertise your business needs to achieve success in your IT initiatives.":pbmSolutionData?.descriptionText2}
      </p>
      <p className="mt-5 text-[#777777]" style={{ fontSize: "18px" }}>
       {load ?"Our Project Based Model is your gateway to effective IT consulting services.":pbmSolutionData?.descriptionText3}
      </p>

    </div>
    
    {/* {listItems.map((item, index) => ( */}
    {(Array.isArray(pbmSolutionData?.listItems) && typeof pbmSolutionData.listItems[0] === 'string' 
    ? pbmSolutionData.listItems 
    : listItems
  ).map((item, index) => (
        <div className="flex justify-start mb-2" key={index}>
          <img src={aboutListIcon} alt="bulb-icon" className="about-icon mr-3" style={{height:"20px",width:"20px"}}/>
          <p className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "18px" }}>
            {item}
          </p>
        </div>
      ))}
  </div>
  <div className="absolute right-[220px] top-[140px]">
  <img src={dottedBg} alt="side-dotted" style={{ width: "96px", height: "350px" }} />
  </div>
</div>
 <hr className="mt-5 border-dashed border-2 opacity-20 mx-0" style={{ borderColor: "#00274D", width: "65%" }} />
          <img 
            src={blogBorder} 
            alt="blog-border-right " 
            className="absolute right-[120px] bottom-[20px] transform rotate-180" 
            style={{width: "248px", height: "213px"}} 
          />
        </div>
      </div>

    )
}