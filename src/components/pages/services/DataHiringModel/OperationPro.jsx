import React, {useState,useEffect} from "react";
import bulbIcon from "../../../images/bulbIcon.png"
import blogBorder from "../../../images/blogBorder.png"
import sideBorder from "../../../images/sideBorder.png"
import dottedBg from "../../../images/dottedBg.png"
import aboutListIcon from "../../../images/aboutListIcon.png"


export default function OperationalPro({data, loading}){
  const [operationalProData, setOperationalProData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setOperationalProData(data?.operationalProData)
    setLoading(loading)
  }, [data])
 
    return(
     <div className="flex flex-row mt-10" style={{height: "42rem", overflow: "hidden"}}>
        <div className="h-full mt-5" style={{width: "520px"}}>
          <img src={sideBorder} alt="side-border" className="h-50"/>
        </div>
        <div className="relative flex-col mb-2 p-10 mx-10 mt-5" >
          <img 
            src={blogBorder} 
            alt="blog-border-left" 
            className="absolute left-0 top-0" 
            style={{width: "248px", height: "213px"}} 
          />
         <div className="flex">
  <div className="h-full overflow-hidden flex-1 mx-5 p-5">
    <div className="flex justify-start mb-5">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
      <h2 className="text-orange-500 text-xl  overflow-hidden" style={{ fontSize: "20px" }}>OPERATIONAL PROCESS</h2>
    </div>
    <div className="overflow-hidden" >
      <p className="overflow-hidden text-ellipsis font-bold mb-5" style={{ fontSize: "50px" }}>
     {load ? "DHM Help Brands Adapt And <br/> Thrive In The Professional World":operationalProData?.mainHeading}
      </p>

    </div>
    <div className="overflow-hidden w-2/3 mb-5">
      <p className="mb-2 text-[#777777]" style={{ fontSize: "18px" }}>
       {load ? " We’re here to show you that the search for resource is over.":operationalProData?.descriptionText}
      </p>
      <p className="text-[#777777] mt-5" style={{ fontSize: "18px" }}>
      {load ? "With Delostyle Studio’s Dedicated Hiring Model, you gain a competitive edge by accessing top talent, cutting-edge technology, and cost-effective solutions. We’re your trusted partner in IT consulting services, offering consulting services that drive your business forward. Embrace the future of IT consulting with Delostyle Studio today.":operationalProData?.additionalText}
      </p>
      <p className="mt-5 text-[#777777]" style={{ fontSize: "18px" }}>
      {load ? "Contact us to learn more about how our Dedicated Hiring Model can benefit your organization":operationalProData?.introText}
      </p>
    </div>
  </div>
  <div className="absolute right-[200px] top-[200px]">
  <img src={dottedBg} alt="side-dotted" style={{ width: "86px", height: "200px" }} />
  </div>
</div>
 <hr className="mt-5 border-dashed border-2 opacity-20 mx-0" style={{ borderColor: "#00274D", width: "65%" }} />
          <img 
            src={blogBorder} 
            alt="blog-border-right " 
            className="absolute right-[120px] bottom-[80px] transform rotate-180" 
            style={{width: "248px", height: "213px"}} 
          />
        </div>
      </div>

    )
}