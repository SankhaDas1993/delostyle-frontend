import React from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import HourSolution from "./HourSolution";
import HourGrid from "./HourGrid";
import WhyHM from "./WhyHM";
import KnowHM from "./KnowHM";
import HmApproach from "./HmApproach";
import HmEmpower from "./HmEmpower";
import HmWorks from "./HmWorks";
import HmOperational from "./HmOperational";


export default function HourModel(){

    return(
        <>
        <Navbar/>
        <HourSolution/>
        <HourGrid/>
        <WhyHM/>
        <KnowHM/>
        <HmApproach/>
        <HmEmpower/>
        <HmWorks/>
        <HmOperational/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>


        </>
    )
}