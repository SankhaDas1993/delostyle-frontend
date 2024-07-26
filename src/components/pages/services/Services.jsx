import React from "react";
import Navbar from "../../navbar/Navbar";
import Newsletter from "../newsletter/Newsletter";
import SocialUpdates from "../socialUpdates/SocialUpdates";
import Footer from "../footer/Footer";
import ServicesBanner from "./ServicesBanner";
import TypeOfService from "./TypeOfService";
import ServicesBanner2 from "./ServicesBanner2";
import Process from "./Process";
import OurExpert from "./OurExpert";
import ConsultingPro from "./ConsultingPro";

export default function Services(){

    return(
        <div className="overflow-hidden">
        <Navbar/>
        <ServicesBanner/>
        <TypeOfService/>
        <ServicesBanner2/>
        <Process/>
        <OurExpert/>
        <ConsultingPro/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </div>
    )
}