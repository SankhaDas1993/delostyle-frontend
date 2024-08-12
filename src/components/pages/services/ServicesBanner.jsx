import React,{useState,useEffect} from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import service1 from "../../images/service1.png"

const ServicesBanner = ({data,loading}) => {
  const [servicesBannerData, setServicesBannerData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setServicesBannerData(data?.servicesBannerData)
    setLoading(loading)
  }, [data])
  console.log(servicesBannerData)
  console.log(load);

  return (
    <div 
      className="consulting-banner relative bg-blue-50 flex  bg-center bg-no-repeat bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${load ? service1 : servicesBannerData?.backgroundImage})`, backgroundColor: "#00274D96", width: "1728px", height: "592px" }}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-75"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between  mx-20 text-white">
    
      <div className="items-start h-full mt-20 p-10 w-[990px]"> 
  <div className="flex mb-10">
    <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
    <h2 className="text-orange-500 text-xl ml-4" style={{ fontSize: "20px" }}>OUR SERVICES</h2>
  </div>
  <div className="flex flex-col items-start">
    <h2 className="text-white overflow-hidden py-2 font-bold mb-5" style={{ fontSize: "60px" }}>
    {load ? "We Are Expert Consulting With A Global Perspective" : servicesBannerData?.text1}
    </h2>
    <p className="text-gray-700 text-white mt-5 overflow-hidden" style={{ fontSize: "24px"}}>
    {load ? " We are a dedicated team and our comprehensive services are designed to meet the diverse needs of our clients, offering tailored solutions that drive success and growth." : servicesBannerData?.text2}
   </p>
    <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px" }}>
    {load ? "Lets get together" : servicesBannerData?.buttonText}
    </button>
  </div>
</div>

        
      </div>
    </div>
  );
};

export default ServicesBanner;
