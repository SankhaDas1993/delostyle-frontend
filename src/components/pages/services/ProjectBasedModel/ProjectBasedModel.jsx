import React from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import PbmSolution from "./PbmSolution";
import PbmGrid from "./PbmGrid";
import WhyPBM from "./WhyPBM";
import KnowPbm from "./KnowPbm";
import PbmApproach from "./PbmApproach";
import PbmEmpower from "./PbmEmpower";
import PbmWorks from "./PbmWorks";
import PbmOperation from "./PbmOperation";


export default function ProjectBasedModel(){

    return(
        <>
        <Navbar/>
        <PbmSolution/>
        <PbmGrid/>
        <WhyPBM/>
        <KnowPbm/>
        <PbmApproach/>
        <PbmEmpower/>
        <PbmWorks/>
        <PbmOperation/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>


        </>
    )
}