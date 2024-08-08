import React,{useState,useEffect} from "react";
import bulbIcon from "../../images/bulbIcon.png"
import blogBorder from "../../images/blogBorder.png"
import sideBorder from "../../images/sideBorder.png"
import dottedBg from "../../images/dottedBg.png"
import p1 from "../../images/p1.png"
import p2 from "../../images/p2.png"
import p3 from "../../images/p3.png"



export default function Process({data,loading}){
  const [processData, setProcessData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setProcessData(data?.processData)
    setLoading(loading)
  }, [data])
  console.log(processData)
  console.log(load);

    return(
              <div className="flex flex-row items-center justify-center mt-20 overflow-hidden" style={{height: "75rem"}}>
        <div className="h-full mt-5" style={{width: "300px"}}>
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
      <h2 className="text-orange-500 text-xl mb-2 overflow-hidden" style={{ fontSize: "20px" }}>
      {load ? "OPERATIONAL PROCESS" : processData?.title}
      </h2>
    </div>
    <div className="overflow-hidden mb-1" >
      <p className="overflow-hidden text-ellipsis font-bold mb-5" style={{ fontSize: "56px" }}>
      {load ? " Driving Business Success Through Operational Excellence And Cutting-Edge Technology" : processData?.heading}
     
      </p>

    </div>
    <div className="overflow-hidden w-2/3 mb-10">
      <p className="text-[#777777]" style={{ fontSize: "18px" }}>
      {load ? "Operational processes are the backbone of any business, essential for its smooth functioning and growth. They ensure efficiency, productivity, and ultimately drive the business forward. Get fresh HR ideas from this young and creative company" : processData?.description}
      
      </p>


    </div>
      <hr className="mt-10 mb-10  border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: "60%" }} />

      <div className="flex gap-20 mt-5 mb-10">
  <div className="text-center"> 
    <img 
      src={p1} 
      alt="model-icon" 
      className="rounded-full p-4" 
      style={{ height: "150px", width: "150px", border: "1px solid #00274D", margin: "4px" }} 
    />
    <h2 className="text-orange-500 text-3xl font-bold mt-2">90%</h2>
    <p className="font-bold mt-1">Development <br/> Consulting</p> 
  </div>
  <div className="text-center"> 
    <img 
      src={p2} 
      alt="model-icon" 
      className="rounded-full p-4" 
      style={{ height: "150px", width: "150px", border: "1px solid #00274D", margin: "4px" }} 
    />
    <h2 className="text-orange-500 text-3xl font-bold mt-2">80%</h2> 
    <p className="font-bold mt-1">Software<br />Support</p> 
  </div>
  <div className="text-center"> 
    <img 
      src={p3} 
      alt="model-icon" 
      className="rounded-full p-4" 
      style={{ height: "150px", width: "150px", border: "1px solid #00274D", margin: "10px" }} 
    />
    <h2 className="text-orange-500 text-3xl font-bold mt-2">85%</h2> 
    <p className="font-bold mt-1">Management <br/>Consulting</p>
  </div>
</div>



  </div>
  <div className="absolute right-[180px] top-[350px]">
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