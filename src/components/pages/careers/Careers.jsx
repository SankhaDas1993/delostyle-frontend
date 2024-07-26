import React from "react";
import Navbar from "../../navbar/Navbar";
import Newsletter from "../newsletter/Newsletter"
import SocialUpdates from "../socialUpdates/SocialUpdates"
import Footer from "../footer/Footer"
import CareerBanner from "./CareerBanner";
import CareerConsulting from "./CareerConsulting";
import ImageGrid from "./ImageGrid";
import CareerForm from "./CareerForm";
import CareerWork from "./CareerWork";



export default function Careers(){

    return(
        <div className="overflow-hidden">
        <Navbar/>
        <CareerBanner/>
        <CareerConsulting/>
        <ImageGrid/>
        <CareerForm/>
        <CareerWork/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </div>
        
    )
}