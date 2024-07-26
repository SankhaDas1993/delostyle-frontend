import React,{useState} from 'react';
import './Form.css';
import howitwork from "../../../images/howitwork.jpg";
import bulbIcon from "../../../images/bulbIcon.png";
import quote from "../../../images/quote.png"

const Form = () => {
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
        className="absolute inset-0 bg-white"
        style={{ opacity: 0.8, zIndex: -10 }}
      ></div>

      <div className="lg:w-1/2 flex justify-center p-2 lg:p-12">
        <div className="text-center">
          <div className="flex mb-5  mx-6">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
            <h2 className="text-orange-500 text-xl" style={{ fontSize: "20px" }}>HOW IT WORKS</h2>
          </div>
          <h2 className="font-bold mb-4 whitespace-normal" style={{fontSize:"56px"}}>Get A Free Quote And Take The First Step Today</h2>
          <p className="mb-4 text-[#777777]  text-center mx-20 whitespace-normal w-[500px]">
            Take the first step towards unlocking the full potential of your business with our customized IT consulting services. Your success, our priority!
          </p>
          <p className=" mb-4 text-[#777777]">NOTE: The below calculation shows result for a month.</p>
          <img src={quote} alt="Illustration" className="w-full max-w-sm mx-auto" />
        </div>
      </div>
      
      <div className="lg:w-1/2   justify-center p-6 lg:p-12">
        <div className="bg-white mb-10 shadow-md w-[500px] h-[400px] overflow-hidden form-card" >
          <form className='p-5'>
            <div className="mb-4 ">
              <label className="text-[#00274D] font-bold" style={{fontSize:"18px"}}>Industry</label>
              <select className="input-field mt-4">
                <option className="input-field ">Select</option>
              </select>
            </div>
           
            <div className="main-div" style={{ width: '500px' }}>
      <div className="mb-4 range-slider-container ">
        <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
          Approx number of resources
        </label>
        <div className=" relative">
          <input 
            type="range" 
            min="1" 
            max="100" 
            value={resourceCount} 
            onChange={handleResourceChange} 
            className="range-slider mt-5" 
          />
          <div className="range-value  pointer-events-none absolute bottom-[-10px]  flex items-center justify-center h-[40px] w-[40px] rounded-full" style={{ left: resourceCount == 1 ? '0px' : `${resourceCount}%` , background: "#FF5722"  }}>
            {resourceCount}
          </div>
        </div>
      </div>
      <div className="mb-4 range-slider-container">
        <label className="text-[#00274D] font-bold" style={{ fontSize: "18px" }}>
          How long do you need these resources (months)?
        </label>
        <div className="range-slider-wrapper">
          <input 
            type="range" 
            min="1" 
            max="12" 
            value={duration} 
            onChange={handleDurationChange} 
            className="range-slider mt-5" 
          />
          <div className="range-value" style={{ left: `${(duration - 1) * 100 / 11}%` }}>
            {duration}
          </div>
        </div>
      </div>
    </div>
            <hr className="mt-5 border-dashed border-2 opacity-20 mx-0" style={{ borderColor: "#00274D", width: "100%" }} />

          </form>
         
          <div className='flex  items-center justify-between' style={{ height : "90px", marginTop: "0px"}}>
            <div className="text-left w-[70%] ml-14">
              <span className="text-xl font-bold text-[#FF6600] ">Total</span>
            </div>
            <div className="text-right bg-[#FCE9DD] h-[100%] w-[30%] flex items-center justify-center mb-0">
              <span className="text-xl font-bold">$30,000.00</span>
            </div>
            </div>

          </div>
          <form>
          <div className="bg-white p-10 rounded-lg shadow-md mb-4 w-[560px] h-[610px]">
              <div className="grid grid-cols-2 gap-4 mb-4 ">
              <div>
              <label className="text-[#00274D] font-bold " style={{fontSize:"18px"}}>Phone Number *</label>
                <input type="text" placeholder="Phone Number" className="input-field mt-2" />
                </div>
                <div>
                <label className="text-[#00274D] font-bold" style={{fontSize:"18px"}}>Address</label>
                <input type="text" placeholder="Address" className="input-field mt-2" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
              <label className="text-[#00274D] font-bold" style={{fontSize:"18px"}}>Name *</label>
                <input type="text" placeholder="Name" className="input-field mt-2" />
                </div>
                <div>
              <label className="text-[#00274D] font-bold" style={{fontSize:"18px"}}>Email</label>
                <input type="email" placeholder="Email" className="input-field mt-2" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
              <label className="text-[#00274D] font-bold" style={{fontSize:"18px"}}>Preferred Service Date</label>
                <input type="date" placeholder="Preferred Service Date" className="input-field mt-2" />
                </div>
                <div>
                <label className="text-[#00274D] font-bold" style={{fontSize:"18px"}}>Preferred Service Time</label>
                <input type="time" placeholder="Preferred Service Time" className="input-field mt-2" />
                </div>
              </div>
              <div className="mb-4">
              <div>
              <label className="text-[#00274D] font-bold" style={{fontSize:"18px"}}>Message</label>
                <textarea placeholder="Message" className="input-field mt-4 h-[150px]"></textarea>
                </div>
              </div>
              <button type="submit" className="btn-primary rounded-full w-[300px]">Send a Message</button>
            </div>
          </form>
       
      </div>
    </div>
  );
};

export default Form;
