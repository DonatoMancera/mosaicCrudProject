"use client"
import React from "react"
import styled from "styled-components"
import   Carousel   from "react-bootstrap/Carousel"
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css';

const ThirdSection = () =>{
    const cardData = [
        {
            title: "E-commerce",
            intro: "Yllamco laboris nisi ut aliquip ex ea commodo.",
            backgroundImage: require("/public/images/Foto1.png")
        },
        {
            title: "Your CV as website",
            intro: "Yllamco laboris nisi ut aliquip ex ea commodo.",
            backgroundImage: require("/public/images/Foto2.png")
        },
        {
            title: "Another Service",
            intro: "Yllamco laboris nisi ut aliquip ex ea commodo.",
            backgroundImage: require("/public/images/Foto3.png")
        },
        {
            title: "Another Service",
            intro: "Yllamco laboris nisi ut aliquip ex ea commodo.",
            backgroundImage: require("/public/images/Foto4.png")
        }
    ];
    
    return (
        <ThirdContainer>
            <div className="thirdTextContainer">
                    <Image src="/images/tres.jpg" alt="" width={400} height={350} />
                <div>
                    <h2>Discover more of our services</h2>
                    <p>Beyond designing web pages, we design solutions.<br/>
                    In our platform, we turn your vision into digital reality. 
                    From conceptualization to implementation, 
                    our expert team will guide you through every step of 
                    the website creation process. With intuitive tools and
                    a wide range of customizable designs, we're here to help you stand out online. Start today and take your web presence to the next level!
                    </p>
                </div>
                <button type="button" className="btn btn-outline-dark btn-lg">Lets Go</button>
            </div>
            <Carousel className="carrusel" data-bs-theme="light" >
                {cardData.map((item, index) =>(
                    <Carousel.Item key={index}>
                        <Image className="d-block w-100" src={item.backgroundImage} alt="" width={500} height={450} />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.intro}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </ThirdContainer>
    );
}

export default ThirdSection;

const ThirdContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    font-family: "Poppins", sans-serif;
    background-color: #F4F4F2;
    color: #101010;
    width: 100%;
    height: auto;
    .thirdTextContainer {
        max-width: 1200px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 0 auto;
        padding-top: 20rem;
        padding-bottom: 10rem;
        img{
            width: 40rem;
            position: absolute;
            top: 21rem;
            left: -10rem;
        }
        h2{
            text-align: right;
            font-size: 2.5rem;
            margin-bottom: 1rem;

        }
        p{
            text-align: right;
            padding-left: 30rem;
            font-size: 1.5rem;
            margin-top: 0.5rem;
            line-height: 1.5;
        }
    }
    
    @media (max-width: 900px) {
        margin: 0;
        padding: 0;
        
        .thirdTextContainer {
            position: relative;
            background-color: #F4F4F2;
            padding-bottom: 10rem;
            img{
                width: 27rem;
                position: absolute;
                top: 2rem;
                left: 0;
            }
            div{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                h2 {
                    font-size: 20px;
                    z-index: 3;
                }
                p {
                    padding-left: 25rem;
                    font-size: 14px;
                    text-align: right;
                }
            }
            button{
                    position: absolute;
                    top: 16.5rem;
                    left: 47rem;
            }
        }
    }

    @media (max-width: 768px) {
    margin: 0;
    padding: 0;

        .thirdTextContainer {
            position: relative;
            background-color: #F4F4F2;
            img{
                width: 20rem;
                position: absolute;
                top: 5rem;
                left: 0;
            }
            div{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                h2 {
                    font-size: 20px;
                    z-index: 3;
                }
                p {
                    padding-left: 18rem;
                    font-size: 14px;
                    text-align: right;
                }
            }
            button{
                    position: absolute;
                    top: 20rem;
                    left: 6rem;
            }

        }
    }
`;
