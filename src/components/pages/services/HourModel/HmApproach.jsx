import React from 'react';
import ap1 from "../../../images/ap1.png";
import ap2 from "../../../images/ap2.png";
import ap3 from "../../../images/ap3.png";
import ap4 from "../../../images/ap4.png";

const HmApproach = () => {
  const items = [
    {
      title: "Developing Business Solutions",
      image: ap1,
    },
    {
      title: "Program Modeling and Analytics",
      image: ap2,
    },
    {
      title: "Improving Business Planning",
      image: ap3,
    },
    {
      title: "Delivering Business Solutions",
      image: ap4,
    },
  ];

  return (
    <div className="flex justify-center items-center mx-2 m-10"> 
      {items.map((item, index) => (
        <div key={index} className="w-80 h-80 flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-xl m-2"> 
          <img src={item.image} alt={item.title} className="w-40 h-40 object-contain" />
          <p className="text-center font-medium text-black mt-2" style={{ fontSize: "20px" }}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default HmApproach;
