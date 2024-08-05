import React from "react";
import Navbar from "../../navbar/Navbar";
import TeamBanner from "./TeamBanner";
import Testimonial from "./Testimonial";
import TeamBanner2 from "./TeamBanner2";
import RequirementProcess from "./RequirementProcess";
import Newsletter from "../newsletter/Newsletter";
import SocialUpdates from "../socialUpdates/SocialUpdates";
import Footer from "../footer/Footer";
import RequirementProcessCommon from "../RequirementProcess/RequirementProcessCommon";

export default function OurTeam(){

    return(
        <div className="overflow-hidden">
        <Navbar/>
        <TeamBanner/>
        <Testimonial/>
        <TeamBanner2/>
        <RequirementProcess/>
        {/* <RequirementProcessCommon/> */}
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </div>
    )
}