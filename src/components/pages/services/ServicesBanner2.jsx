import React,{useState,useEffect} from "react";
import bulbIcon from "../../images/bulbIcon.png"
import serviceBanner2 from "../../images/serviceBanner2.png"


export default function ServicesBanner2({data,loading}){
  const [serviceBanner2Data, setServiceBanner2Data] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setServiceBanner2Data(data?.serviceBanner2Data)
    setLoading(loading)
  }, [data])
  console.log(serviceBanner2Data)
  console.log(load);

    
    return(
        <div 
      className="consulting-banner relative bg-blue-50 flex  bg-center bg-no-repeat bg-cover mt-20 overflow-hidden"
      style={{ backgroundImage: `url(${serviceBanner2})`, backgroundColor: "#00274D96"}}
    >
      <div className="absolute inset-0 bg-[#0258FF4D] bg-opacity-30"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between  mx-20 text-white">
    
      <div className="items-start h-full mt-20 p-10" style={{width:"990px"}}> 
  <div className="flex mb-5">
    <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
    <h2 className="text-orange-500 text-xl ml-4" style={{ fontSize: "20px" }}>WHAT WE DO</h2>
  </div>
  <div className="flex flex-col items-start">
    <h2 className="text-white overflow-hidden py-2 font-bold mb-2" style={{ fontSize: "58px" }}>
    {load ? " Transforming Your Ideas Into Reality By Empowering Innovation" : serviceBanner2Data?.text1}
   </h2>
    <p className="text-white mt-5 overflow-hidden" style={{ fontSize: "24px"}}>
    {load ? " If you have the idea, we will guide you through the process. We're here to provide you with the best possible resources to help visualize your ideas and bring them to life. Partner with us to turn your vision into reality with expert support every step of the way." : serviceBanner2Data?.text2}
   </p>
    <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px" }}>
    {load ? "Know About Our Services" : serviceBanner2Data?.buttonText}
   </button>
  </div>
</div>

        
      </div>
    </div>
    )
}