import React from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import contactForm from "../../images/contactForm.png"
import "../../Style.css"

const ContactForm = () => {
  return (
    <div 
      className="consulting-banner relative flex bg-center bg-no-repeat bg-cover mt-20"
      style={{
        background: 'linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-20 text-white">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-20 text-white gap-10 p-5">
  <div className="w-full md:w-1/2">
    <div className="flex mb-5 items-center mt-10">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
      <h2 className="text-orange-500 text-xl " style={{ fontSize: "20px"}}>LET’S CONNECT</h2>
    </div>
    <div className="flex flex-col items-start">
      <h1 className="text-white overflow-hidden py-2 font-bold" style={{ fontSize: "42px" }}>Get in Touch with Us</h1>
      <p className="mt-1 overflow-hidden" style={{ fontSize: "22px", padding: "22px 0" }}>
        Leave us a little info, and we'll be in touch. Whether you have questions, need more information, or are ready to start a project, we're here to help.
      </p>
      <img src={contactForm} alt='contact-form' style={{ height: "400px", justifyContent: "center" }} />
    </div>
  </div>
  <div className="w-full md:w-1/2  p-5 rounded-lg shadow-lg mt-10 md:mt-0" style={{backgroundColor:"#FFFFFFF7",height:"600px",width:"500px"}}>
  <form className="p-5">
  <div className="mb-4">
    <label htmlFor="name" className="block text-lg font-medium mb-2" style={{ color: "#00274D" }}>Name*</label>
    <input type="text" id="name" name="name" className="bg-white appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" style={{ borderColor: "#CCCBCB", borderWidth: "1px" }} />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-lg font-medium mb-2" style={{ color: "#00274D" }}>Your Email*</label>
    <input type="email" id="email" name="email" className="bg-white appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" style={{ borderColor: "#CCCBCB", borderWidth: "1px" }} />
  </div>
  <div className="mb-4">
    <label htmlFor="subject" className="block text-lg font-medium mb-2" style={{ color: "#00274D" }}>Subject (Optional)</label>
    <input type="text" id="subject" name="subject" className="bg-white appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" style={{ borderColor: "#CCCBCB", borderWidth: "1px" }} />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-lg font-medium mb-2" style={{ color: "#00274D" }}>Project Details</label>
    <textarea id="message" name="message" rows="4" className="bg-white appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" style={{ borderColor: "#CCCBCB", borderWidth: "1px" }}></textarea>
  </div>
  <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-5" style={{ fontSize: "20px", width: "250px" }}>Send a Message</button>
</form>

  </div>
</div>

      </div>
    </div>
  );
};

export default ContactForm;
