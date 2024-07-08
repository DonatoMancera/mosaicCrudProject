"use client"
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import { DiJsBadge, DiHtml5, DiBootstrap, DiCss3, DiPhotoshop, DiDjango, DiNodejsSmall } from "react-icons/di";
import { Carousel } from "react-bootstrap";

function Services() {
    useEffect(() => {
        Aos.init();
    }, []);

    const data = [
        {name: "Kevin Donato Mancera Romero", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex porta, maximus ex sit amet.", image: "/1.jpg"},
        {name: "Lizbeth Almonte", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex porta, maximus ex sit amet.", image:"/2.jpg"},
        {name: "Cristian Andres", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ex porta, maximus ex sit amet.", image: "/3.jpg"}
    ];

    const [cont, setCont] = useState(0);

    const handleSelect = (selectedIndex) => {
        setCont(selectedIndex);
    };

    return (
        <>
            {data.map((item, index) => (
                <InicioContainer key={index} data-aos="fade-up">
                    <div className="textContainer">
                        <h2>{item.name}</h2>
                        <div className="Icons">
                            <DiJsBadge/>
                            <DiHtml5/>
                            <DiBootstrap/>
                            <DiCss3/>
                            <DiPhotoshop/>
                            <DiDjango/>
                            <DiNodejsSmall/>
                        </div>
                        <p>{item.description}</p>
                    </div>
                    
                        <Carousel className="Carrusel" activeIndex={cont} onSelect={handleSelect}>
                            <Carousel.Item className="Item" >
                            <Image className="d-block w-100" src="/images/1.jpg" alt="" width={500} height={450} />
                            </Carousel.Item>
                            <Carousel.Item>
                            <Image className="d-block w-100" src="/images/2.jpg" alt="" width={500} height={450} />
                            </Carousel.Item>
                            <Carousel.Item>
                            <Image className="d-block w-100" src="/images/3.jpg" alt="" width={500} height={450} />
                            </Carousel.Item>
                        </Carousel>
                    
                </InicioContainer>
            ))}
        </>
    );
}

export default Services;

const InicioContainer = styled.div`
  margin: 3rem;
  width: 90%;
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    h2 {
      padding-bottom: 6rem;
    }
    p {
      padding: 10px;
    }
    .Icons {
      display: inline-block;
      font-size: 50px;
      padding: 5px;
      margin-bottom: 0.2rem;
    }
  }

  @media (max-width: 768px) {
    .textContainer {
      width: 100%;
      padding: 20px;
    }
  }

  .Carrusel {
    width: 100%;
    margin-left: 3rem;
    img {
      width: 100%;
      height: 20rem;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    .Carrusel {
      margin-left: 0;
      img {
        height: 15rem;
      }
    }
  }
`;