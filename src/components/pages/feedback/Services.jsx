import React, { useState,useEffect } from 'react';
import frontend from '../../images/frontend.png';
import desktop from '../../images/desktop.png';
import mobile from '../../images/mobile.png';
import ecom from '../../images/ecom.png';
import staff from '../../images/staff.png';
import data from '../../images/data.png';

const services = [
  { icon: frontend, title: 'Frontend Development' },
  { icon: desktop, title: 'Web Application Development' },
  { icon: mobile, title: 'Mobile App Development' },
  { icon: ecom, title: 'E-commerce Development' },
  { icon: staff, title: 'Staff Augmentation' },
  { icon: data, title: 'Data Science' },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const handleToggle = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  const visibleCards = showAll || !isSmallScreen ? services : services.slice(0, 4);

  return (
    <div className="relative z-10 p-10">
      <div className="flex-col grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${isSmallScreen ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-10">
        {visibleCards.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg text-center
              ${isSmallScreen ? 'h-10 w-10' : 'h-30vh w-27vh'} 
            shadow-lg`}"
            style={{
              height: "30vh",
              width: "27vh",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"
            }}
            
          >
            <div className="mb-4">
              <img src={service.icon} alt={service.title} className="w-15 h-20 ${isSmallScreen ? 'h-12' : 'h-20'}`}" />
            </div>
            <h2 className="text-lg font-semibold">{service.title}</h2>
          </div>
        ))}
      </div>
    
  
      {isSmallScreen && (
        <div className="flex justify-center mt-6">
          {!showAll && services.length > 4 && (
            <button
              onClick={handleToggle}
              className="p-2 w-[250px] border-2 border-[#FF6600] text-[#FF6600] rounded-full bg-white"
            >
              See all
            </button>
          )}
          {showAll && (
            <button
              onClick={handleToggle}
              className="p-2 w-[250px] border-2 border-[#FF6600] text-[#FF6600] rounded-full bg-white"
            >
              Show less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Services;
