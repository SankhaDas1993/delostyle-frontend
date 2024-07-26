import React from 'react';
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 relative z-10 " >
   {services.map((service, index) => (
  <div
    key={index}
    className="flex flex-col items-center justify-center bg-white p-6 rounded-lg text-center "
    style={{
      height: "30vh",
      width: "27vh",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"
    }}
  >
    <div className="mb-4">
      <img src={service.icon} alt={service.title} className="w-15 h-20" />
    </div>
    <h2 className="text-lg font-semibold">{service.title}</h2>
  </div>
))}


    </div>
  );
};

export default Services;
