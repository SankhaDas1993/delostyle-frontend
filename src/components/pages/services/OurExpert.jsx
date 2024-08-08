import React,{useState,useEffect} from "react";
import bulbIcon from "../../images/bulbIcon.png"
import ourexper from "../../images/ourexper.png"

export default function OurExpert({data,loading}){
  const [ourExpertData, setOurExpertData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setOurExpertData(data?.ourExpertData)
    setLoading(loading)
  }, [data])
  console.log(ourExpertData)
  console.log(load);

    return(
        <div 
        className="consulting-banner  relative flex bg-center bg-no-repeat bg-cover mt-10 overflow-hidden"
        style={{
          background: 'linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)',height:"550px"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40" ></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-20 text-white">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-20 text-white gap-10 p-5">
        <div className="w-4/4  mt-5 ">
    <div className="flex mb-5 items-center mt-2 h-10">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
      <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>MEET OUR EXPERTS</h2>
    </div>
    <div className="flex flex-col items-start">
      <h1 className="text-white overflow-hidden  font-bold" style={{ fontSize: "36px" }}>
      Our Experts Will Make Bring Your Ideas To Life 
      </h1>
      <p className="mt-1 overflow-hidden" style={{ fontSize: "18px", padding: "10px 0" }}>
      {load ? "Our experts will materialize your ideas and meticulously create the touchpoints necessary to ensure high-quality deliverables." : ourExpertData?.description}
    
      </p>
      <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px" }}>Connect To Our Experts</button>
    </div>
  </div>
  
  
   </div>
   <img src={ourexper} alt="work-together-border" className=" right-0 left-40" style={{ width: '560px', height: '560px' }} />
    </div>
      </div>
  

    )
}