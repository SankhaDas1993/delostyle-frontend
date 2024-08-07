import React, { useState } from 'react';
import logo from "../images/logo.svg";
import navbarImg from "../images/navbarImg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdownClick = (menu) => {
    if (dropdownOpen === menu) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(menu);
    }
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.dropdown')) {
      setDropdownOpen(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-blue-900" style={{ height: "150px", width: "100%", borderBottom: "2px solid gray" }}>
      <div className="flex flex-wrap justify-between p-4 w-full h-full" style={{
        backgroundImage: `url(${navbarImg})`,
        backgroundSize: 'cover',
        backgroundPosition: "center"
      }}>
        <a href="/" className="flex p-6 xl:ml-[205px] lg:ml-[80px]">
          <img src={logo} className="h-8" alt="delostyle-logo" style={{ height: "97px" }} />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg mt-[38px] lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <div className="flex items-center justify-end space-x-4 mx-4">
            <a href="https://www.facebook.com/officialdelostylestudio/" target="_blank" rel="noopener noreferrer" className="text-white">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.instagram.com/delostylestudio/" target="_blank" rel="noopener noreferrer" className="text-white">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.youtube.com/@delostylestudio8426" className="text-white" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="https://in.linkedin.com/company/delostylestudio" target="_blank" rel="noopener noreferrer" className="text-white">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
          <div style={{ width: "100%", display: 'flex', alignItems: "center", justifyContent: "flex-end", marginTop: "5px" }}>
            <div style={{ width: "20%", height: "2px", background: "white", opacity: 0.3, marginRight: "13px" }} />
          </div>
          <div style={{ marginLeft: "80px", fontSize: "22px", marginBottom: "20px" }}>
            <ul className="font-medium flex flex-col md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0" style={{ marginTop: "25px", fontSize: "22px" }}>
              <li className="relative dropdown">
                <a href="/" className="block py-2 px-3 text-white">Home</a>
              </li>
              <li className="relative dropdown">
                <a href="#" className="block py-2 px-3 text-white" onClick={() => handleDropdownClick('about')}>About</a>
                {dropdownOpen === 'about' && (
                  <div className="absolute left-0 top-full mt-2 z-10 bg-blue-900 bg-blue-50 bg-opacity-90 shadow-lg rounded-md w-60">
                    <ul className="py-1">
                      <li><a href="/about" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">About Us</a></li>
                      <li><a href="/team" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Team</a></li>
                      <li><a href="/clients" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Clients</a></li>
                      <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">History</a></li>
                      <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Testimonials</a></li>
                      <li><a href="/careers" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Careers</a></li>
                      
                    </ul>
                  </div>
                )}
              </li>
              <li className="relative dropdown">
                <a href="#" className="block py-2 px-3 text-white" onClick={() => handleDropdownClick('services')}>Services</a>
                {dropdownOpen === 'services' && (
                  <div className="absolute left-0 top-full mt-2 z-10 bg-blue-900 bg-blue-50 bg-opacity-90 shadow-lg rounded-md w-60">
                    <ul className="py-1">
                      <li><a href="/services" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Our Services</a></li>
                      <li><a href="/hiringmodel" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Dedicated Hiring Model</a></li>
                      <li><a href="/projectmodel" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Project Based Model</a></li>
                      <li><a href="/hourmodel" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Hour Model</a></li>
                      <li><a href="/taskmodel" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Task Based Model</a></li>
                      <li><a href="/supportmodel" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Support Model</a></li>
                      <li><a href="/hybridmodel" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Hybrid Model</a></li>
                      <li><a href="/quote" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">Get Quote</a></li>
                      <li><a href="/FAQ" className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black">FAQs</a></li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="relative dropdown">
                <a href="#" className="block py-2 px-3 text-white" onClick={() => handleDropdownClick('blogs')}>Blogs</a>
                {dropdownOpen === 'blogs' && (
                  <div className="absolute left-0 top-full mt-2 z-10 bg-blue-900 bg-blue-50 bg-opacity-90 shadow-lg rounded-md w-60">
                    <ul className="py-1">
                      <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-100  hover:text-black">Blogs</a></li>
                    
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="/contact" className="block py-2 px-3 text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
