
import React,{useState,useEffect} from 'react';
import banner2 from "../../images/banner2.jpg";
import bulbIcon from "../../images/bulbIcon.png";
import bannerDots from "../../images/bannerDots.png";
import Stepper from './Stepper';

const ConsultingSteps = ({data,loading}) => {
  const [consultingData, setConsultingData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setConsultingData(data?.consultingData)
    setLoading(loading)
  }, [data])
  console.log(consultingData)
  console.log(load);
  return (
    <div 
      className="consulting-banner relative bg-blue-50 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${banner2})`, backgroundColor: "#00274D96" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div className="relative z-10 lg:h-[600px] md:h-[685px] h-[700px] flex flex-col lg:flex-row items-center justify-between text-white">

        <div className="lg:w-1/2 md:w-full w-full flex flex-col items-start mb-6 lg:mb-0 p-4 h-[700px] justify-center">
          <div className="flex items-center mb-4">
            <img src={bulbIcon} alt="bulb-icon" className="h-8 w-8" />
            <h2 className="text-orange-500 text-lg lg:text-xl ml-4">OUR PROCESS</h2>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-white text-3xl lg:text-5xl py-3">{load ? "Steps Of Consulting" : consultingData?.headingText}</h1>
            <p className="text-white text-lg lg:text-xl py-3">{load ? "We can help you with picking the best people for your company" : consultingData?.paragraphText}</p>
            <button className="bg-orange-500 text-white py-2 px-4 lg:py-3 lg:px-6 rounded-full text-sm lg:text-lg mt-4">{load ? "Online Application" : consultingData?.buttonText}</button>
          </div>
        </div>

        <div className="flex  bg-opacity-50 md:w-full w-full rounded-lg items-center justify-center xl:justify-between h-[454px] xl:w-[768px]" style={{ backgroundColor: "#FFFFED9C" }}>
          <div className=" hidden w-[150px] lg:flex lg:items-center lg:justify-end">
            <img src={bannerDots} alt='dotted-bg' className="mt-10 h-62 w-20" />
          </div>
          <Stepper />
        </div>
      </div>
    </div>
  );
};

export default ConsultingSteps;
