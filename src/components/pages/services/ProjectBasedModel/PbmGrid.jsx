import React from 'react';
import icongrid1 from "../../../images/icongrid1.png";
import icongrid2 from "../../../images/icongrid2.png";
import icongrid3 from "../../../images/icongrid3.png";
import icongrid4 from "../../../images/icongrid4.png";

const PbmGrid = () => {
  const items = [
    {
      title: "Server Side Language",
      image: icongrid1,
    },
    {
      title: "Database Specialization",
      image: icongrid2,
    },
    {
      title: "Front-end Technology",
      image: icongrid3,
    },
    {
      title: "Project Management",
      image: icongrid4,
    },
  ];

  return (
    <div className="flex justify-center items-center mx-2 p-5"> 
      {items.map((item, index) => (
        <div key={index} className="w-80 h-80 flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-xl m-2"> 
          <img src={item.image} alt={item.title} className="w-40 h-40 object-contain" />
          <p className="text-center font-medium text-black mt-2" style={{ fontSize: "20px" }}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PbmGrid;
