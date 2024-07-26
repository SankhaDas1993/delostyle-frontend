import React from "react";
import Navbar from "../../navbar/Navbar";
import ClientsBanner from "./ClientsBanner";
import ClientBenifits from "./ClientBenifits";
import OurVision from "./OurClientVision";
import OurClientWork from "./OurClientWork";
import Newsletter from "../newsletter/Newsletter"
import SocialUpdates from "../socialUpdates/SocialUpdates"
import Footer from "../footer/Footer"


export default function OurClients(){

    return(
        <div className="overflow-hidden">
        <Navbar/>
        <ClientsBanner/>
        <ClientBenifits/>
        <OurVision/>
        <OurClientWork/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </div>
        
    )
}