import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png"
import ourwork2 from "../../../images/ourwork2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faXTwitter,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProjectRangamaati = () => {
  return (
    <div className="p-20 mx-20" style={{fontSize:"20px"}}>
      <div className="text-orange-500 text-sm font-semibold mb-2 flex items-center">
      <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />CONSULTING • PROJECT
      </div>
      <h1 className="text-4xl font-bold mb-20 mt-5" style={{fontSize:"56px"}}>Project Rangamaati-Grassroot Initiative</h1>
      <img 
        src={ourwork2}
        alt="Project Rangamaati" 
        className="w-full rounded-lg mb-6"
      />
      <div className="flex justify-between text-sm text-gray-600 mb-5" style={{fontSize:"20px"}}>
        <div><span className="font-bold text-orange-500">Location :</span><span className="text-[#777777] mx-2">Kolkata</span></div>
        <div><span className="font-bold text-orange-500">Year :</span><span className="text-[#777777] mx-2">2022</span></div>
      </div>
      <p className="text-gray-700 mb-4 mt-10" >
        Project Rangamaati is a grassroots initiative dedicated to empowering artisans of Bengal by helping them break free from exploitation and poverty. By enabling these artisans to achieve financial independence through the sales of their handicrafts and handloom products, Project Rangamaati fosters sustainable growth and community development.
      </p>
      <h2 className="text-xl font-bold mb-4">The Role of DeloStyle Studio</h2>
      <p className="text-gray-700 mb-4">
        DeloStyle Studio played a crucial role in enhancing Project Rangamaati’s online presence by designing and developing a tailored e-commerce website. This platform not only reflects the brand’s identity but is also optimized with the latest features to improve customer experience and drive sales.
      </p>
      <p className="text-gray-700  mb-4">
        <span className="font-bold">Enhanced Online Presence</span><br />
        The custom e-commerce website significantly boosted Project Rangamaati’s visibility. The increase in inquiries and conversion of leads to sales demonstrated the website’s effectiveness in attracting and engaging customers.
      </p>
      <p className="text-gray-700  mb-4">
        <span className="font-bold">Cutting-Edge Technology Integration</span><br />
        DeloStyle Studio integrated the latest technologies and functionalities into the website, ensuring it meets current industry standards and aligns perfectly with Project Rangamaati's needs.
      </p>
      <span className="font-bold mb-4">Testimonial</span><br />
      <p className="text-gray-700 mt-4  mb-4">
        DeloStyle Studio designed an ecommerce website for us , from scratch level ,integrating all latest technology as to meet our need ,right from theme to incorporating different functionalities.Working along with the Team seemed very easy and inclusive, Rajib displayed great patience in understanding our needs ,vision and mission and reflecting the same through the website they designed.
      </p>
      <p className="text-gray-700  mb-4">
      DeloStyle Studio provided us with a positive experience in designing and developing our ecommerce website. When working with a professional team like DeloStyle Studio, their expertise in incorporating the latest technologies and functionalities ensures that your website meets your specific needs and aligns with current industry standards.
      </p>
      <p className="text-gray-700  mb-4">
      The fact that working with the team felt easy and inclusive indicates effective communication and collaboration throughout the project. This was crucial for achieving a successful outcome and ensuring that our requirements and preferences are properly understood and implemented.
      </p>
      <h2 className="text-xl font-bold mb-4">The Future with DeloStyle Studio</h2>
      <p className="text-gray-700  mb-4">
      Our collaboration with DeloStyle Studio underscores our commitment to empowering artisans by leveraging technology. The user-friendly, feature-rich e-commerce platform they developed for Project Rangamaati is a testament to their professionalism and dedication. Partner with DeloStyle Studio to enhance your online presence and drive meaningful impact for your business and community.
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

export default ProjectRangamaati;
