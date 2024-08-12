import React from 'react';
import ap1 from "../../../images/ap1.png";
import ap2 from "../../../images/ap2.png";
import ap3 from "../../../images/ap3.png";
import ap4 from "../../../images/ap4.png";

const HyApproach = ({hybrid_data}) => {
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
    <div className="flex items-center justify-center m-10 mx-2"> 
      {items.map((item, index) => (
        <div key={index} className=" box-grid w-[250px] h-[250px] flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-xl m-2"> 
          <img src={item.image} alt={item.title} className="w-[150px] h-[150px] object-contain" />
          <p className="text-center font-medium text-black mt-2 whitespace-normal w-[180px]" style={{ fontSize: "20px" }}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default HyApproach;
