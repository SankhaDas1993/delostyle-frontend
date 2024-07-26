import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import worktogetherBd from "../../images/worktogetherBd.png"
import "./about.css"

export default function WeWorkTogether(){


    
    return(
        <div 
      className="consulting-banner relative flex bg-center bg-no-repeat bg-cover mt-20 overflow-hidden"
      style={{
        background: 'linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-20 text-white">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-20 text-white gap-10 p-5">
      <div className="w-3/4  mt-20">
  <div className="flex mb-5 items-center mt-10">
    <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
    <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>WE WORK TOGETHER</h2>
  </div>
  <div className="flex flex-col items-start">
    <h1 className="text-white overflow-hidden py-2 font-bold" style={{ fontSize: "44px" }}>
      Envisioning A Future Where Business Technology Solutions Seamlessly Integrate With Your Ideas
    </h1>
    <p className="mt-1 overflow-hidden" style={{ fontSize: "20px", padding: "20px 0" }}>
      Together as a team, we envision a future where business technology solutions seamlessly integrate with your ideas to catalyze growth, foster innovation, and elevate human potential.
    </p>
    <p className="mt-1 overflow-hidden" style={{ fontSize: "20px", padding: "20px 0" }}>
      Our vision is anchored in a commitment to empower organizations of all sizes with the transformative power of IT.
    </p>
    <p className="mt-1 overflow-hidden" style={{ fontSize: "20px", padding: "20px 0" }}>
      Our team solely believes and is run by the notion that businesses are not limited by technology but propelled by it. With this vision, we strive to be the catalyst that propels your innovative business solutions that are in sync with today’s digital age, ensuring that every client we serve reaps the benefits of cutting-edge IT solutions. In our vision, innovation knows no bounds. We aspire to be at the forefront of technological advancements, leading the way in developing groundbreaking solutions that simplify complexity, enhance productivity, and drive sustainable success.
    </p>
    <p className="mt-1 overflow-hidden" style={{ fontSize: "20px", padding: "20px 0" }}>
      We are here to offer you with a landscape of outsourcing services where IT consulting is synonymous with reliability, expertise, along with a deep understanding of our clients’ unique needs. Delostyle Studio aims to set the industry standard by consistently delivering excellence in service, fostering long-lasting partnerships, and enabling multiple businesses just like yours to reach their full potential.
    </p>
    <p className="mt-1 overflow-hidden" style={{ fontSize: "20px", padding: "20px 0" }}>
      Moreover, when it comes to the future, it’s about making a meaningful impact today, our team of professionals are wholly committed to offering business technology solutions for clients like you, employees, and communities by embracing the limitless possibilities of technology.
    </p>
    <p className="mt-1 overflow-hidden" style={{ fontSize: "20px", padding: "20px 0" }}>
      Together, let’s shape a future where your business thrives with Delostyle Studio as your trusted IT partner.
    </p>
    <img src={worktogetherBd} alt="work-together-border" className="absolute top-20 right-2" style={{ width: '460px', height: '460px' }} />
  </div>

</div>

  
</div>

      </div>
    </div>
      
    )
}