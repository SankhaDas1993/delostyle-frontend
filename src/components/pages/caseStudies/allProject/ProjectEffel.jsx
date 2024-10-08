import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png"
import ourwork5 from "../../../images/ourwork5.png"
import betterbuild from "../../../images/betterbuild.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faXTwitter,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProjectEffel = () => {
  return (
    <div className="p-20 mx-20" style={{fontSize:"20px"}}>
      <div className="text-orange-500 text-sm font-semibold mb-2 flex items-center">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />CONSULTING • PROJECT
      </div>
      <h1 className="text-4xl font-bold mb-10 mt-5" style={{fontSize:"46px"}}>Eiffel Industries – A Beautiful Website Creation</h1>
      <img 
        src={ourwork5}
        alt="Project Rangamaati" 
        className="w-full rounded-lg mb-6"
      />
      <div className="flex justify-between text-sm text-gray-600 mb-5" style={{fontSize:"20px"}}>
        <div><span className="font-bold text-orange-500">Location :</span><span className="text-[#777777] mx-2">Arizona</span></div>
        <div><span className="font-bold text-orange-500">Year :</span><span className="text-[#777777] mx-2">2022</span></div>
      </div>
      <p className="text-[#777777] mb-4 mt-10" >
      DeloStyleStudio is proud to have created a stunning and effective website for Eiffel Industries, carefully selecting the perfect color combinations and content to showcase their business model. By thoroughly understanding their requirements, we delivered a website that not only meets but exceeds their expectations, enhancing their online presence and leaving a lasting impression.
      </p>
      <h2 className="text-xl font-bold mb-4">The Vision Behind Eiffel</h2>
      <p className="text-[#777777] mb-4">
      Grocair was conceived with a clear vision: to create a seamless and efficient grocery shopping experience for customers while providing robust tools for businesses to manage their inventory and operations. The goal was to develop a user-friendly platform that integrates all aspects of the grocery shopping journey, from browsing products to managing stocks and ensuring timely deliveries.
      </p>
   
      <span className="font-bold mb-4 mt-20">Key Features of the Eiffel Industries Website</span><br />
      <h6 className="font-bold mb-4 mt-6" style={{fontSize:"18px"}}>1. Perfect Color and Content Selection</h6>
      <p className="text-[#777777]  mb-4">
      We meticulously selected colors and crafted content that perfectly reflects the Eiffel Industries brand and business model, creating a cohesive and visually appealing online presence.
      </p>
      <h6 className="font-bold mb-4 mt-4" style={{fontSize:"18px"}}>2. User-Friendly Design</h6>
      <p className="text-[#777777]  mb-4">
      Our design prioritized user experience, ensuring that the website is easy to navigate and that visitors can effortlessly find the information they need, contributing to a positive user experience.
      </p>
      <h6 className="font-bold mb-4 mt-4" style={{fontSize:"18px"}}>3. Professional Execution</h6>
      <p className="text-[#777777]  mb-4">
      Our team offered multiple solutions with quick turnarounds, resulting in minimal reworks and ensuring on-time delivery. This demonstrates our commitment to professionalism, efficiency, and client satisfaction.
      </p>
     
      <h2 className="text-xl font-bold mb-4">Testimonial</h2>
      <p className="text-[#777777]  mb-4">
      We at Eiffel Industries enjoyed partnering with DeloStyleStudio Private Limited. They were extremely professional to provide multiple solutions with quick turnarounds resulting in minimal reworks and on-time delivery.
      </p>

      <h2 className="text-xl font-bold mb-4">The Future with DeloStyleStudio</h2>
      <p className="text-[#777777]  mb-4">
      Our successful collaboration with Eiffel Industries underscores our dedication to creating beautiful, functional websites that leave a lasting impression. Partner with DeloStyleStudio to elevate your online presence, showcase your business effectively, and ensure a strong, lasting impact in the digital world.
      </p>
      <hr className="mt-10  border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: "100%" }} />
      <div className="flex justify-end space-x-4 p-5">
  <h2 className="text-[#555555]" style={{ fontSize: "20px" }}>Share Project</h2>
  <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-10 w-10">
    <FontAwesomeIcon icon={faFacebookF} size="lg" />
  </a>
  <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-10 w-10">
    <FontAwesomeIcon icon={faXTwitter} size="lg" />
  </a>
  <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-10 w-10">
    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
  </a>
  <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-10 w-10">
    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
  </a>
</div>

    </div>
  );
};

export default ProjectEffel;
