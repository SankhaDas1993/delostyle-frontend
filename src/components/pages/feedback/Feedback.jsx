import React from 'react';
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import justdial from "../../images/justdial.png";
import ambitionbox from "../../images/ambitionbox.png";
import glassdoor from "../../images/glassdoor.png";
import freelancer from "../../images/freelancer.png";
import clutch from "../../images/clutch.png";
import bulbIcon from "../../images/bulbIcon.png";
import Services from './Services';
import background from "../../images/background.jpg"
import "./feedback.css";



const FeedBack = () => {
 
    const feedbackData = [
        {
            id: 1,
            title: 'Google',
            description: 'This is the first feedback card.',
            tags: ['tag1', 'tag2'],
            imageUrl:google,
            rating: 4.4
        },
        {
            id: 2,
            title: 'Facebook',
            description: 'This is the second feedback card.',
            tags: ['tag3', 'tag4'],
            imageUrl: facebook,
            rating: 3.8 
        },
        {
            id: 3,
            title: 'Clutch',
            description: 'This is the first feedback card.',
            tags: ['tag1', 'tag2'],
            imageUrl: clutch,
            rating: 4.4
        },
        {
            id: 4,
            title: 'AmbitionBox',
            description: 'This is the second feedback card.',
            tags: ['tag3', 'tag4'],
            imageUrl: ambitionbox,
            rating: 3.8 
        },
        {
            id: 5,
            title: 'GlassDoor',
            description: 'This is the first feedback card.',
            tags: ['tag1', 'tag2'],
            imageUrl:glassdoor,
            rating: 4.4
        },
        {
            id: 6,
            title: 'Freelancer',
            description: 'This is the second feedback card.',
            tags: ['tag3', 'tag4'],
            imageUrl: freelancer,
            rating: 3.8 
        }
    ];

    return (
        <div className="review-section" >
        {/* <div className='bg-white' style={{
            opacity: 0.7
        }}> */}
        <div className="flex-center  p-20 relative z-10">
        <div className=" flex items-center justify-between rounded overflow-hidden"  style={{height:"157px"}}>
        {feedbackData.map(feedback => (
                <div key={feedback.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white" style={{fontSize:"20px", width : ""}}>
                   
                    <div className="px-6 py-4" style={{
                        width : "1300px"
                    }}>
                    <div className='flex gap-3 mb-2'>
                    <img className="w-full" src={feedback.imageUrl} alt="Feedback" style={{height:"40px",width:"40px"}} />
                        <div className="font-bold text-base flex items-center justify-center">{feedback.title}</div>
                        </div>
                        <hr ></hr>
                        <div className="items-center mt-2">
                            <span className="text-gray-700 text-base mr-2">{"Rated   "+feedback.rating.toFixed(1)+"   Star"}</span>
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 fill-current ${index < Math.round(feedback.rating) ? 'text-yellow-500' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a.75.75 0 0 1 .65.38l1.9 3.29 3.82.56a.75.75 0 0 1 .42 1.28l-2.75 2.69.65 3.81a.75.75 0 0 1-1.09.79L10 13.36l-3.4 1.78a.75.75 0 0 1-1.09-.79l.65-3.81-2.75-2.69a.75.75 0 0 1 .42-1.28l3.82-.56 1.9-3.29A.75.75 0 0 1 10 2z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
        <div className="flex flex-col items-center text-center p-10  rounded-lg m-5 relative z-10">
        <div className="flex mb-5">
       <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />  <h2 className="text-orange-500 text-xl mb-2" style={{fontSize:"20px"}}>OUR SERVICES</h2>
       </div>
     
      <h2 className="text-4xl font-bold mb-4 overflow-hidden">Solutions For Your Company</h2>
      <p className="text-base text-gray-600 mb-6">
        We are a young and creative company and we offer you fresh business ideas.
      </p>
      <p className="text-base text-gray-600 mb-6">
        We are a group of industry professionals with a global mindset and a collaborative culture. 
        We work to understand your requirements and drive to make the overall business work in a smooth way.
      </p>
      <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-5" style={{fontSize:"20px"}}>Explore Solutions</button>
    </div>
    <div className="flex items-center justify-center z-20">
        <Services/>
    </div>
    </div>
    // </div>
    );
};

export default FeedBack;
