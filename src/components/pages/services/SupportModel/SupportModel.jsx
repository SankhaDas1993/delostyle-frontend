import React from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import SmSolution from "./SmSolution";
import SmGrid from "./SmGrid";
import WhySm from "./WhySm";
import KnowSM from "./KnowSM";
import SmApproach from "./SmApproach";
import SmEmpower from "./SmEmpower";
import SmWorks from "./SmWorks";
import SmOperation from "./SmOperation";



export default function SupportModel(){

    return(
        <>
        <Navbar/>
        <SmSolution/>
        <SmGrid/>
        <WhySm/>
        <KnowSM/>
        <SmApproach/>
        <SmEmpower/>
        <SmWorks/>
        <SmOperation/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>


        </>
    )
}