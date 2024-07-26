import React from "react";
import Navbar from "../../navbar/Navbar";
import AboutBanner from "./AboutBanner";
import Newsletter from "../newsletter/Newsletter";
import SocialUpdates from "../socialUpdates/SocialUpdates";
import Footer from "../footer/Footer";
import "./about.css"
import OurVision from "./OurVision";
import YearProgress from "./YearProgress";
import OperationalProcess from "./OperationProcess";
import WhoAreWe from "./WhoAreWe";
import WeWorkTogether from "./WeWorkTogether";
import TechDriven from "./TechDriven";
import CreateSolution from "./CreateSolution";
import OurMission from "./OurMission";
import OurWork from "./OurWork";
import Priority from "./Priority";
import RequirementProcess from "./RequirementProcess";


export default function About (){

    return(
        <div className="overflow-hidden">
            <Navbar/>
            <AboutBanner/>
            <OurVision/>
            <YearProgress/>
            <OperationalProcess/>
            <WhoAreWe/>
            <WeWorkTogether/>
            <TechDriven/>
            <CreateSolution/>
            <OurMission/>
            <OurWork/>
            <Priority/>
            <RequirementProcess/>
            <Newsletter/>
            <SocialUpdates/>
            <Footer/> 
        </div>
    )
}
