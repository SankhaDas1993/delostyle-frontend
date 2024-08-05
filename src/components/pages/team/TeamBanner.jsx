import React, { useState, useEffect } from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import teamBanner from "../../images/teamBanner.png";

const TeamBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bannerStyle = {
    backgroundImage: isMobile ? 'none' : `url(${teamBanner})`,
    backgroundColor: isMobile ? '#00274D' : 'transparent',
    width: '100%',
    height: 'auto',
    minHeight: '300px',
  };

//   const bannerStyle = {
//     backgroundImage: isMobile 
//         ? 'none' 
//         : `url(${teamBanner})`,
//     backgroundColor: isMobile ? 'linear-gradient(151.69deg, #00274D 12.36%, #005BB3 120.37%)' : 'transparent',
//     width: '100%',
//     height: 'auto',
//     minHeight: '300px',
// };

  return (
    <div
      className="relative flex bg-center bg-no-repeat bg-cover"
      style={bannerStyle}
    >
      <div className={`absolute inset-0 ${isMobile ? 'bg-[#00274D] bg-opacity-100' : 'bg-[#00274D] bg-opacity-50'}`}></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-5 md:mx-20 text-white py-10 md:py-20">
        <div className="h-full mt-10 md:mt-20 px-4 md:px-10 w-full md:w-3/4 lg:w-1/2">
          <div className="flex mb-5 md:mb-10">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon w-8 md:w-10" />
            <h2 className="text-orange-500 text-lg md:text-xl ml-4">OUR TEAM</h2>
          </div>
          <div className="flex flex-col items-start">
          <h2 className="text-white overflow-hidden py-2 font-bold mb-3 md:mb-5 text-2xl md:text-4xl md:w-[500px] lg:text-6xl leading-relaxed lg:whitespace-normal lg:w-[800px]">
  Our Team of Quality Experts And United Excellence
</h2>

            <p className="text-white mt-3 md:mt-5 overflow-hidden text-base md:text-xl lg:text-2xl">
              We stand together to create exceptional quality products for our clients.
            </p>
            <div className="w-full flex justify-start">
  <button className="bg-orange-500 text-white py-2 px-4 md:px-6 rounded-full mt-5 md:mt-10 text-sm md:text-lg lg:text-xl">
    Lets get together
  </button>
</div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
