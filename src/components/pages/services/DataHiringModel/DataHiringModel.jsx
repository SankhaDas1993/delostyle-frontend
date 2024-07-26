import React from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import DhmSolution from "./DhmSolution";
import IconGrid from "./IconGrid";
import WhyDHM from "./WhyDHM";
import KnowUsBetter from "./KnowUsBetter";
import ApproachGrid from "./ApproachGrid";
import Empower from "./Empower";
import HowItWorks from "./HowItWorks";
import OperationalPro from "./OperationPro";


export default function DataHiringModel(){

    return(
        <>
        <Navbar/>
        <DhmSolution/>
        <IconGrid/>
        <WhyDHM/>
        <KnowUsBetter/>
        <ApproachGrid/>
        <Empower/>
        <HowItWorks/>
        <OperationalPro/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>


        </>
    )
}