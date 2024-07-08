"use client"
import React, {useEffect, useState} from "react"
import styled from "styled-components";
import { FaCode } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';

const FirstSection = () =>{
    useEffect(() => {
        Aos.init();
    }, []);

    const [cont, setCont] = useState(1);

    const data = [
        {
            title: "Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vehicula sem nec commodo. Nam eros lectus, vulputate commodo tristique nec, aliquam non leo. Donec id accumsan tellus."
        },
        {
            title: "FrontEnd", description: "Fusce eget pretium diam, sit amet faucibus sapien. Curabitur fringilla ante sed vehicula gravida. Sed mollis purus a accumsan sagittis. Maecenas iaculis lacinia tortor id fringilla"
        },
        {
            title: "BackEnd", description: "Morbi cursus libero gravida ullamcorper porta. Curabitur volutpat ligula ac metus laoreet, aliquet elementum odio scelerisque. Etiam tellus erat"
        }
    ];

    return (
        <InicioContainer>
            {data.map((item, index) => (
                <div key={index} className="Container">
                    <div>
                        <h2>{cont + index}</h2>
                        <FaCode className="Icon" data-aos="zoom-in-up"/>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </InicioContainer>
    );
}

export default FirstSection;

const InicioContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    background-color: #101010;
    padding: 40px;
    .Container {
        font-family: "Poppins", sans-serif;
        width: auto;
        height: auto;
        padding: 30px 50px 10px 20px;
        color: #F4F4F2;
        border-left: 3px solid #DDF247;
        h2{
            margin-bottom: 100px;
            font-weight: 900;
        }
        h3{
            margin-bottom: 70px;
            font-weight: 700;
        }
        div{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .Icon{
                font-size: 40px;
                color: #DDF247;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        .Container {
            padding: 20px 40px 10px 40px;
        }
    }

    @media (max-width: 480px) {
        .Container {
            padding: 10px 20px 5px 20px;
        }
    }
`;
