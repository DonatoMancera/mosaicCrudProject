import React from "react"
import FirstSection from "@/ui/home-components/firstSeccion"
import SecondSection from "@/ui/home-components/secondSection"
import ThirdSection from "@/ui/home-components/thirdSection"
import "bootstrap/dist/css/bootstrap.min.css";
export default function page(){
    return(
        <div>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
        </div>
    )
}