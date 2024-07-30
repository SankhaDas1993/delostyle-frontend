import React from 'react';
import subscribe from "../../images/subscribe.png";
import bulbIcon from "../../images/bulbIcon.png";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="subscribe-section relative overflow-hidden " style={{
        width : "90%",
        // height: "500px",
        backgroundImage: `url("../../images/subscribe.png")`,
        display: "flex",
        alignItems : "center",
        justifyContent : "center"
    }}>
      <div className="z-10 absolute items-center justify-center left-24" >
        <div className="flex items-center">
          <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
          <h2 className="text-orange-500 text-xl mb-2 overflow-hidden">STAY CONNECTED</h2>
        </div>
        <h2 
          className="subscribe-head text-white text-3xl h-[80px] sm:text-1xl md:text-2xl lg:text-4xl text-center md:text-left mt-5"
          style={{fontSize: "46px"}} 
        >
          Subscribe To Our Newsletter
        </h2>
        <div className="overflow-hidden p-5" style={{ display: "flex", alignItems: "center" }}>
  <input
    type="email"
    placeholder="Your Email"
    className="form-control w-75 p-5"
    style={{
      borderRadius: "25px 0 0 25px",
      backgroundColor: "rgba(238, 238, 238, 1)",
      height: "50px",
      border: "1px solid #ddd",
      marginRight: "-25px",
      zIndex: 1,
       fontSize:"20px"
    }}
  />
  <button
    className="bg-orange-500 text-white py-2 px-6 overflow-hidden p-5" 
    style={{
      height: "50px",
      borderRadius: "25px 25px 25px 25px",
      border: "1px solid #ddd",
      zIndex: 1,
      fontSize:"20px"
    }}
  >
    Subscribe
  </button>
</div>

      </div>
      <img src={subscribe} alt="subscribe" className="items-center" />
    </div>
  );
};

export default Newsletter;
