import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div
      className={`border-b border-[#FF6600] ${isOpen ? 'bg-orange-100' : 'bg-white'} rounded-md mb-2`}
    >
      <button
        className={`w-full text-left py-4 px-5 focus:outline-none flex justify-between items-center ${isOpen ? 'bg-orange-500 text-white' : 'bg-white text-black'} rounded-md`}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className="px-5 pb-4 bg-orange-100 text-black rounded-md">{children}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[550px] mx-2 mt-5  rounded-md shadow-lg">
      <AccordionItem
        title="1. What industries do you specialize in?"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        <p>
          We have a team of professionals who are specialized in providing support to multiple industry verticals. Our team consists of developers, designers, consultant and support professionals from different industry. Their specialization help us connect with industries like medical, garments, fashion, technology, construction, real estate, consumers and many more.
        </p>
        <br />
        <p>
          In one word we can say that you name it and we are there with you. For any queries feel free to connect to us at care@delostylestudio.com
        </p>
      </AccordionItem>
      <AccordionItem
        title="2. Do we really need a business plan?"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        <p>A business plan helps you solidify your ideas in an organized format. If you have a project road map ready with you then we suggest you to map our resources based on that. That will help you to get the maximum output within a minimum interval of time.
        Our clients have got best results sharing their business plans and we have provided the best in quality resources based on their plans. However, it is not mandatory to share any plans with us. However, we believe that we can convert your plans to reality.</p>
      </AccordionItem>
      <AccordionItem
        title="3. What model do you suggest?"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        <p>A We have come up with services as mentioned below:
        <ul className="list-disc">
          <li>Dedicated Hiring Model</li>
          <li>Project Based Model</li>
          <li>Hour Model</li>
          <li>Task Based Model</li>
          <li>Support Model</li>
          <li>Hybrid Model</li>
        </ul>
        </p>

        <p>Each of these models are created based on requirements. Every model has their own specialty. You can connect to our experts to understand each and every model in a much better way and then can select the model that fits your business goal and budget. Write to us at care@delostylestudio.com</p>
      </AccordionItem>
      <AccordionItem
        title="4. What type of service are covered in each model?"
        isOpen={openIndex === 3}
        onToggle={() => handleToggle(3)}
      >
        <p>Delostyle Studio Private Limited is a technology consulting company. We have a team of developers, designers, data analyst, online marketing, support experts and much more. We are continuously increasing our strengths and also improving our skills. We are not limited to any specific technology or scope of technology.
        Every model specified as our service comprises of all these skill sets. You can let us know about the requirement and we will suggest you the best fit solution.</p>
      </AccordionItem>
      <AccordionItem
        title="5. What is DHM?"
        isOpen={openIndex === 4}
        onToggle={() => handleToggle(4)}
      >
        <p>DHM stands for Dedicated Hiring Model. In simple words, a dedicated team of professionals will work on your project only. It is a non sharing model where the mentioned team will not work for any project other than your project.</p>
        <br />
        <p>We always suggest this model for medium or large size projects. You can even select one or two dedicated members to work on your project. Select based on your project and skill requirement. The success rate for this model is more than 95%. Feel free to connect to our experts and start immediately with DHM.</p>
      </AccordionItem>
      <AccordionItem
        title="6. When should I use hourly model?"
        isOpen={openIndex === 5}
        onToggle={() => handleToggle(5)}
      >
        <p>Hourly model is one of the economic model designed for you. You can select the team members based on your requirement and can specify the hours to be billed for each resource. You can have dedicated professionals working for the project for the billed hours and get your work done.</p>
        <br />
        <p>40 hours of availability for each resource. You can book for minimum of 20 hours per week per resource and get your project rolling. You can increase the hours of availability at the beginning of every week and you will be billed accordingly. For more details connect to our experts at care@delostylestudio.com</p>
      </AccordionItem>
      <AccordionItem
        title="7. Can we use multiple models at the same time?"
        isOpen={openIndex === 6}
        onToggle={() => handleToggle(6)}
      >
        <p>The answer is yes. You can use multiple models at the same time. However, you do not have to keep on selecting individual models. Instead just select the hybrid model and get the flavor of all the models under one roof.</p>
        <br />
        <p>Hybrid model consists of flexible plans that uses a mix of all the models. You can connect to our experts to know more on this care@delostylestudio.com</p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
