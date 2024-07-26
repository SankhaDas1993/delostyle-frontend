import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png"
import ourwork4 from "../../../images/ourwork4.png"
import betterbuild from "../../../images/betterbuild.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faXTwitter,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProjectGroCair = () => {
  return (
    <div className="p-20 mx-20" style={{fontSize:"20px"}}>
      <div className="text-orange-500 text-sm font-semibold mb-2 flex items-center">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />BUSINESS • CONSULTING • PROJECT
      </div>
      <h1 className="text-4xl font-bold mb-10 mt-5" style={{fontSize:"56px"}}>Grocair - The Grocery App</h1>
      <img 
        src={ourwork4}
        alt="Project Rangamaati" 
        className="w-full rounded-lg mb-6"
      />
      <div className="flex justify-between text-sm text-gray-600 mb-5" style={{fontSize:"20px"}}>
        <div><span className="font-bold text-orange-500">Location :</span><span className="text-[#777777] mx-2">Arizona</span></div>
        <div><span className="font-bold text-orange-500">Year :</span><span className="text-[#777777] mx-2">2021</span></div>
      </div>
      <p className="text-[#777777] mb-4 mt-10" >
      In an era where convenience and efficiency are paramount, Grocair stands out as a pioneering solution that redefines the grocery shopping experience. What started as a simple idea has materialized into a powerful, customer-driven application that is revolutionizing the way people shop for groceries. At [Your Organization's Name], we are proud to have developed Grocair, an app that not only meets the needs of consumers but also empowers businesses to thrive through effective inventory management.
      </p>
      <h2 className="text-xl font-bold mb-4">The Vision Behind Grocair</h2>
      <p className="text-[#777777] mb-4">
      Grocair was conceived with a clear vision: to create a seamless and efficient grocery shopping experience for customers while providing robust tools for businesses to manage their inventory and operations. The goal was to develop a user-friendly platform that integrates all aspects of the grocery shopping journey, from browsing products to managing stocks and ensuring timely deliveries.
      </p>
   
      <span className="font-bold mb-4 mt-20">Key Features of Grocair</span><br />
      <h6 className="font-bold mb-4 mt-6" style={{fontSize:"18px"}}>1. Customer-Centric Design</h6>
      <p className="text-[#777777]  mb-4">
      Grocair’s intuitive interface is designed with the customer in mind, making it easy to browse, search, and purchase groceries. Personalized recommendations and easy navigation enhance the shopping experience, ensuring customers find what they need quickly and efficiently.
      </p>
      <h6 className="font-bold mb-4 mt-4" style={{fontSize:"18px"}}>2. Streamlined Procurement</h6>
      <p className="text-[#777777]  mb-4">
      One of the standout features of Grocair is its real-time inventory management system. Businesses can monitor stock levels, track product movements, and manage restocking seamlessly. This feature ensures that shelves are always stocked, reducing the chances of out-of-stock items and enhancing customer satisfaction.
      </p>
      <h6 className="font-bold mb-4 mt-4" style={{fontSize:"18px"}}>3. Streamlined Order Processing</h6>
      <p className="text-[#777777]  mb-4">
      Grocair streamlines the order processing workflow, from order placement to delivery. Businesses can track orders in real-time, coordinate with delivery partners, and ensure timely and accurate deliveries. This efficiency not only improves operational productivity but also boosts customer trust and loyalty.
      </p>
      <h6 className="font-bold mb-4 mt-4" style={{fontSize:"18px"}}>4. Data-Driven Insights</h6>
      <p className="text-[#777777]  mb-4">
      The app provides valuable data-driven insights, helping businesses understand customer preferences, track sales trends, and make informed decisions. By leveraging these insights, grocery stores can optimize their offerings and tailor their services to meet the evolving demands of their customers.
      </p>
     
      <h2 className="text-xl font-bold mb-4">The Future with Grocair</h2>
      <p className="text-[#777777]  mb-4">
      Grocair is a game-changer in the retail industry, offering a comprehensive solution that bridges the gap between customer needs and business operations. Join us in transforming the grocery shopping experience with Grocair and drive success for both consumers and businesses alike.
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

export default ProjectGroCair;
