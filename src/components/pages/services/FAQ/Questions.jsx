import React,{useState} from 'react';
import faq1 from "../../../images/faq1.png"
import howitwork from "../../../images/howitwork.jpg";
import bulbIcon from "../../../images/bulbIcon.png";
import quote from "../../../images/quote.png"
import Accordion from './Accordion';

const Questions = () => {
    const [resourceCount, setResourceCount] = useState(1);
    const [duration, setDuration] = useState(1);
  
    const handleResourceChange = (e) => {
      setResourceCount(e.target.value);
    };
  
    const handleDurationChange = (e) => {
      setDuration(e.target.value);
    };
  return (
    <div
      className="consulting-banner bg-cover bg-center relative flex flex-col lg:flex-row items-center justify-center"
      style={{ backgroundImage: `url(${howitwork})`,opacity:"0.9" }}>
      
      <div 
        className="absolute inset-0 bg-[#f8f7f7]"
        style={{ opacity: 0.9, zIndex: -10 }}
      ></div>

      <div className="lg:w-1/2 flex justify-center p-2 lg:p-12">
        <div className="text-center">
          <div className="flex mb-5  mx-6">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
            <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <h2 className="font-bold mb-4 whitespace-normal" style={{fontSize:"56px"}}>Find Answers To Common Inquiries About Our Business.</h2>
         
          <img src={faq1} alt="Illustration" className="w-full max-w-sm mx-auto" />
        </div>
      </div>
      
      <div className="lg:w-1/2   justify-center p-6 lg:p-12">
        <Accordion/>
      </div>
    </div>
  );
};

export default Questions;
