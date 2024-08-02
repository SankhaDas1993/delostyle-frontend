import React, { useEffect, useState } from 'react';
import "./banner.css"
import bulbIcon from "../../images/bulbIcon.png"

const Banner = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(width)
  return (
    <div
   className={width >= 1381 
    ? "bg-gradient-to-b from-[#00274D] to-[#005BB3] hero-section flex items-center h-screen relative overflow-hidden bg-cover bg-center lg:bg-black" 
    : "bg-[#00274D]"
}

    // style={{
    //   backgroundColor : "#00274D"
    // }}  
  >
      <div className="rounded-lg shadow-lg max-w-3xl relative z-10">
      <div className="flex mobile-view flex-col items-center justify-center min-h-screen text-center">
  <div>
  <div className="mx-10 mb-10 sm:mb-10 sm:mx-10  ">
  <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-2 md:mb-4 lg:mb-10">
    <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12" />
    <h2 className="text-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl ml-0 sm:ml-4 mt-4 sm:mt-0">WELCOME TO DELOSTYLE STUDIO</h2>
  </div>
  <div className="flex flex-col items-start ">
  <h2 className="font-bold text-white overflow-hidden text-5xl md:text-7xl py-2 ">Your Vision</h2>
<h2 className="font-bold text-white overflow-hidden text-5xl md:text-7xl py-2">Our Passion</h2>

<p className="text-white mt-2 sm:mt-3 md:mt-5 text-left text-base sm:text-lg md:text-xl lg:text-2xl py-4 md:py-6">Consulting expertise that helps your business thrive</p>

    <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-5" style={{fontSize:"20px"}}>Let's get together</button>
  </div>
</div>

</div>

</div>

      </div>
      </div>
   
  );
};

export default Banner;
