import React from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import HySolution from "./HySolution";
import HyGrid from "./HyGrid";
import WhyHy from "./WhyHy";
import KnowHy from "./KnowHy";
import HyApproach from "./HyApproach";
import HyWorks from "./HyWorks";
import HyEmpower from "./HyEmpower";
import HyOperation from "./HyOperation";


export default function HybridModel(){

    return(
        <>
        <Navbar/>
        <HySolution/>
        <HyGrid/>
        <WhyHy/>
        <KnowHy/>
        <HyApproach/>
        <HyEmpower/>
        <HyWorks/> 
        <HyOperation/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>


        </>
    )
}