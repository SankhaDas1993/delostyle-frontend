import React, { useState } from 'react';
import bulbIcon from '../../images/bulbIcon.png';
import careerForm from "../../images/careerForm.png"

const CareerForm = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  return (
    <div
      className="consulting-banner relative flex bg-center bg-no-repeat bg-cover mt-10 h-[900px]"
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
              <h2 className="text-orange-500 text-xl" style={{ fontSize: '20px' }}>
                LET’S WORK TOGETHER
              </h2>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-white overflow-hidden py-2 font-bold" style={{ fontSize: '42px' }}>
                We Are Trusted Consulting Firm
              </h1>
              <p className="mt-1 overflow-hidden" style={{ fontSize: '20px', padding: '22px 0' }}>
                We offer unparalleled expertise, innovative solutions, and dedicated support to help
                your business thrive. Join forces with us and experience the difference that true
                partnership makes.
              </p>

              <div
                className="w-full md:w-1/2 p-5 rounded-lg shadow-lg mt-10 md:mt-0"
                style={{ backgroundColor: '#FFFFFFF7', height: '430px', width: '480px' }}
              >
                <form className="p-5">
                  <div className="mb-4 relative">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="file" className="block text-lg font-medium mb-2" style={{ color: '#00274D' }}>
                      Upload Your CV
                    </label>
                    <div className="relative">
                    <label
  htmlFor="file"
  className="bg-orange-100 cursor-pointer border-2 border-[#FF6600] py-2 px-4 text-[#FF6600] text-center rounded-full h-8 flex items-center justify-center"
  style={{
    borderColor: '#FF6600',
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: 'translateY(-50%)',
  }}
>
  Choose File
</label>

                      <input
                        type="text"
                        value={fileName}
                        placeholder='No File Chosen'
                        readOnly
                        className="bg-white border border-gray-300 rounded w-full py-2 pl-36 pr-4 text-[#FF6600] leading-tight focus:outline-none focus:bg-white focus:border-orange-500 h-10"
                        style={{ borderColor: '#CCCBCB', borderWidth: '1px', overflow: 'hidden', whiteSpace: 'nowrap' }}
                      />
                    </div>
                  </div>
         <div className="mb-4">
         <label htmlFor="designation" className="block text-lg font-medium mb-2" style={{ color: '#00274D' }}>
          Designation
         </label>
    <div className="custom-select">
    <select
      id="designation"
      name="designation"
      className="bg-white appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
      style={{ borderColor: '#CCCBCB', borderWidth: '1px' }}
    >
      <option value="">Select Designation</option>
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="manager">Manager</option>
    </select>
  </div>
</div>

<div className="mb-4">
  <label htmlFor="location" className="block text-lg font-medium mb-2" style={{ color: '#00274D' }}>
    Location
  </label>
  <div className="custom-select">
    <select
      id="location"
      name="location"
      className="bg-white appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
      style={{ borderColor: '#CCCBCB', borderWidth: '1px' }}
    >
      <option value="">Select Location</option>
      <option value="New York">New York</option>
      <option value="London">London</option>
      <option value="Tokyo">Tokyo</option>
    </select>
  </div>
</div>

                  <button
                    className="bg-orange-500 text-white py-2 px-6 rounded-full mt-5"
                    style={{ fontSize: '20px', width: '250px' }}
                  >
                    Apply For Job
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className=" md:w-1/2 ">
          <img src={careerForm} alt='career-img' className=" mx-10 h-[900px] " />
          </div>
        </div>
       
      </div>
    
    </div>
  );
};

export default CareerForm;
