import React from 'react'
import Navbar from '../../navbar/Navbar';
import Banner from '../banner/Banner';
import FeedBack from '../feedback/Feedback';
import Consulting from '../consulting/ConsultingSteps';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import Technology from '../technology/Technology';
import SocialUpdates from '../socialUpdates/SocialUpdates';
import Newsletter from '../newsletter/Newsletter';
import Footer from '../footer/Footer';
import "../../Style.css"



const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div className="delostyle-container">
        <Navbar/>
        
        <div className="text-3xl">
         <Banner/>
         <FeedBack/>
         <Consulting/>
          <WhatWeDo />
          <Technology/>
          <Newsletter/>
          <SocialUpdates/>
        
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;