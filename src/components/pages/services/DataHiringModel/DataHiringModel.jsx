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
import useHiring from "../HybridModel/HybridModel";
// import useHiring from "../HybridModel/dataHirngFn/dataHiring";

export default function DataHiringModel(){
    const { data, isError, isLoading, refetch} = useHiring()
    console.log(isLoading, "is load")
    console.log(data, "data")
    return(
        <>
        <Navbar/>
        <DhmSolution data ={data} loading={isLoading}/>
        <IconGrid/>
        <WhyDHM data ={data} loading={isLoading}/>
        <KnowUsBetter data ={data} loading={isLoading}/>
        <ApproachGrid/>
        <Empower data ={data} loading={isLoading}/>
        <HowItWorks data ={data} loading={isLoading}/>
        <OperationalPro data ={data} loading={isLoading}/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>


        </>
    )
}