import React from "react";
import bulbIcon from "../../images/bulbIcon.png"
import client1 from "../../images/client1.png"
import client2 from "../../images/client2.png"
import client3 from "../../images/client3.png"
import client4 from "../../images/client4.png"

export default function ClientBenifits(){

    return(
        <>
                <div className="flex flex-col items-center text-center p-10  rounded-lg m-5 relative z-10">
        <div className="flex mb-5">
       <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />  <h2 className="text-orange-500 text-xl mb-2" style={{fontSize:"20px"}}>OUR CLIENTS</h2>
       </div>
     
      <h2 className="font-bold mb-4 overflow-hidden" style={{fontSize:"56px",height:"200px"}}>Our Clients Benefit From The Latest Trends And Strategies</h2>
      <p className="text-base text-[#555555] mb-6" style={{fontSize:"20px"}}>
      At Delostyle Studio, we stay ahead by exploring the latest industry trends and strategies. Our clients benefit from our innovative solutions, tailored to their needs. Partnering with us equips them with the tools and insights to navigate the evolving business landscape and achieve lasting success.
      </p>

      <div className="flex">
      <img src={client1} alt="client1" className="h-30 w-60 mx-5 p-5"/> 
      <img src={client2} alt="client2" className="h-30 w-60 mx-5 p-5"/> 
      <img src={client3} alt="client3" className="h-30 w-60 mx-5 p-5"/> 
      <img src={client4} alt="client4" className="h-30 w-60 mx-5 p-5" /> 
      </div>
    
    </div>
        </>
    )
}