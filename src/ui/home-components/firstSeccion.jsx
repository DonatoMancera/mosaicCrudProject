"use client"
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from "react"
import styled from "styled-components"


const  FirstSection = () =>{
    useEffect(() => {
        Aos.init();
    },)
    /*********************************************/

    

    return (
        <>
            <FirstContainer>
                <div className="homeContainer">
                    <h1><span>TRANSFORMING</span> BUSINESSES,<br/>EMPOWERING FUTURES</h1>
                </div>
                <div className=" buttonContainer d-flex justify-content-start mx-auto" data-aos="fade-up" data-aos-duration="3000">
                    <button type="button" className="btn btn-outline-light btn-lg me-5 ms-5">Let's build a website</button>
                    <button type="button" className="btn btn-outline-light btn-lg">About Us</button>
                </div>
                <svg width="1841" height="1383" viewBox="0 0 1841 1383" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 4">
                        <rect id="Rectangle 1" x="491" y="1383" width="413" height="850" rx="206.5" transform="rotate(-90 491 1383)" fill="url(#paint0_linear_33_2)"/>
                        <rect id="Rectangle 8" x="991" y="898" width="413" height="850" rx="206.5" transform="rotate(-90 991 898)" fill="url(#paint1_linear_33_2)"/>
                        <rect id="Rectangle 2" x="20" y="898" width="413" height="850" rx="206.5" transform="rotate(-90 20 898)" fill="url(#paint2_linear_33_2)"/>
                    <g id="Rectangle 3">
                        <rect x="491" y="413" width="413" height="850" rx="206.5" transform="rotate(-90 491 413)" fill="#DDF247"/>
                        <rect x="491" y="413" width="413" height="850" rx="206.5" transform="rotate(-90 491 413)" fill="url(#paint3_linear_O_2)" fillOpacity="0.5"/>
                    </g>
                    <g id="Ellipse 1">
                        <circle cx="445" cy="970" r="46" transform="rotate(-90 445 970)" fill="#F1511B"/>
                        <circle cx="445" cy="970" r="46" transform="rotate(-90 445 970)" fill="url(#paint4_linear_33_2)" fillOpacity="0.5"/>
                    </g>
                    <g id="Ellipse 2">
                        <circle cx="1387" cy="367" r="46" transform="rotate(-90 1387 367)" fill="#DDF247"/>
                        <circle cx="1387" cy="367" r="46" transform="rotate(-90 1387 367)" fill="url(#paint5_linear_33_2)"/>
                    </g>
                    <g id="Ellipse 4">
                        <circle cx="1795" cy="970" r="46" transform="rotate(-90 1795 970)" fill="#F1511B"/>
                        <circle cx="1795" cy="970" r="46" transform="rotate(-90 1795 970)" fill="url(#paint6_linear_33_2)"/>
                    </g>
                    <g id="Ellipse 3">
                        <circle cx="46" cy="439" r="46" transform="rotate(-90 46 439)" fill="#DDF247"/>
                        <circle cx="46" cy="439" r="46" transform="rotate(-90 46 439)" fill="url(#paint7_linear_33_2)" fillOpacity="0.2"/>
                    </g>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_33_2" x1="799" y1="1435.5" x2="904" y2="2209" gradientUnits="userSpaceOnUse">
                    <stop offset="0.28" stopColor="#D32F2F"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_33_2" x1="1299" y1="950.5" x2="1404" y2="1724" gradientUnits="userSpaceOnUse">
                    <stop offset="0.28" stopColor="#009688"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_33_2" x1="226.5" y1="898" x2="226.5" y2="1748" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F1511B"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_33_2" x1="778.5" y1="442.5" x2="625" y2="1252" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F4F4F2" stopOpacity="0"/>
                    <stop offset="0.473259" stopColor="#F4F4F2" stopOpacity="0.03"/>
                    <stop offset="0.946005" stopColor="#F4F4F2"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_33_2" x1="468.5" y1="934.5" x2="427" y2="1012" gradientUnits="userSpaceOnUse">
                    <stop offset="0.146" stopColor="#F4F4F2" stopOpacity="0"/>
                    <stop offset="0.741" stopColor="#F4F4F2"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_33_2" x1="1387" y1="321" x2="1333.5" y2="431.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#009688" stopOpacity="0"/>
                    <stop offset="1" stopColor="#009688"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_33_2" x1="1791.34" y1="924" x2="1868.5" y2="1016" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#009688" stopOpacity="0"/>
                    <stop offset="1" stopColor="#009688"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear_33_2" x1="89" y1="439" x2="6" y2="459.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F1511B" stopOpacity="0"/>
                    <stop offset="0.77" stopColor="#F1511B"/>
                    </linearGradient>
                    </defs>
                </svg>

            </FirstContainer>
        </>
    )
}
export default FirstSection;
const FirstContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    width: 100%;
    height: 30rem;
    padding-top: 4rem;
    padding-bottom: 8rem;
    position: relative;
    background-color: #101010;

    .homeContainer {
        h1 {
            font-family: "Poppins", sans-serif;
            color: #F4F4F2;
            font-weight: 900;
            font-size: 2.5rem;
            margin-top: 8rem;
            margin-left: 25px;
            span {
                color: #F1511B;
            }
        }
    }
    svg{
        position: absolute;
        top: -27.2rem;
        left: 50rem;
        width: 40%;
        z-index: 5;
    }

    @media (max-width: 900px) {
        height: auto;
        svg{
            display: none;
        }
        .homeContainer {
            align-items: center;
            h1 {
                font-size: 2rem;
                text-align: center;
                margin: 2rem 0;
            }
        }
    }
`;