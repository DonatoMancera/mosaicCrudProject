import React from "react"
import FirstSection from "@/ui/home-components/firstSeccion"
import SecondSection from "@/ui/home-components/secondSection"
import ThirdSection from "@/ui/home-components/thirdSection"
import Footer from "@/ui/footer/footer"
export default function page(){
    return(
        <div>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <Footer/>
        </div>
    )
}