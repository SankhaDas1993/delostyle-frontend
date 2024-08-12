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
import useService from "./serviceFn/apiService";

export default function Services(){
    const { data, isError, isLoading, refetch} = useService()
    console.log(isLoading, "is load")
    console.log(data, "data")

    return(
        <div className="overflow-hidden">
        <Navbar/>
        <ServicesBanner data ={data} loading={isLoading}/>
        <TypeOfService data ={data} loading={isLoading}/>
        <ServicesBanner2 data ={data} loading={isLoading}/>
        <Process data ={data} loading={isLoading}/>
        <OurExpert data ={data} loading={isLoading}/>
        <ConsultingPro data ={data} loading={isLoading}/>
        <Newsletter/>
        <SocialUpdates/>
        <Footer/>
        </div>
    )
}