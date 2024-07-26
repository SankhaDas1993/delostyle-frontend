import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faXTwitter,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ image, title, category, link,desc }) => {
  return (
    <div>
    <div className='flex p-10 mx-20'>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-0  w-[900px] h-[480px]">
      <img src={image} alt={title} className="  w-[900px] h-[480px] object-cover"/>
      </div>
      <div className="p-2 mx-10">
        <div className="text-orange-500 font-semibold">
          {category} <span className="text-orange-500 font-semibold ">• PROJECT</span>
        </div>
        <h2 className=" font-bold mb-2 mt-2" style={{ fontSize: "56px"}}>{title}</h2>
        <p className="text-[#777777] mt-5 overflow-hidden mb-10" style={{ fontSize: "20px"}}>{desc}</p>
      
        <a href={link} className="bg-orange-500 text-white py-2 px-20 rounded-full" style={{ fontSize: "20px", width: "300px"}}>
  View Project
</a>

          <div className="flex space-x-4 mt-20">
          <span className="text-[#555555]" style={{fontSize:"20px"
          }}>Share Project</span>
  <a href="#" className="flex items-center justify-center  text-white bg-orange-500 rounded-full p-2 h-10 w-10">
    <FontAwesomeIcon icon={faFacebookF} size="lg" />
  </a>
  <a href="#" className="flex items-center justify-center  text-white bg-orange-500 rounded-full p-2 h-10 w-10">
  <FontAwesomeIcon icon={faXTwitter} size="lg" />
  </a>
  <a href="#" className="flex items-center justify-center   text-white bg-orange-500 rounded-full p-2 h-10 w-10">
    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
  </a>
  <a href="#" className="flex items-center justify-center   text-white bg-orange-500 rounded-full p-2 h-10 w-10">
    <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
  </a>
</div>
 </div>

      
    
       
    </div>
    <hr className="mt-0 mx-20 border-dashed border-2 opacity-20 " style={{ borderColor: "#00274D", width: "90%" }} />
    </div>
  );
}

export default ProjectCard;
