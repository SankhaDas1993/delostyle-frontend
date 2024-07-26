import React from "react";
import Navbar from "../../../navbar/Navbar";
import Newsletter from "../../newsletter/Newsletter";
import SocialUpdates from "../../socialUpdates/SocialUpdates";
import Footer from "../../footer/Footer";
import TaskSolution from "./TaskSolution";
import TaskGrid from "./TaskGrid";
import WhyTS from "./WhyTS";
import KnowTS from "./KnowTS";
import TsApproach from "./TsApproach";
import TsEmpower from "./TsEmpower";
import TsWorks from "./TsWorks";
import TsOperation from "./TsOperation";


export default function TaskBasedModel(){

    return(
        <>
        <Navbar/>
        <TaskSolution/>
        <TaskGrid/>
        <WhyTS/>
        <KnowTS/>
        <TsApproach/>
        <TsEmpower/>
        <TsWorks/>
        <TsOperation/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>


        </>
    )
}