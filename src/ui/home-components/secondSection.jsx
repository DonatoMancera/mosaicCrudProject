"use client"
import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "next/image"

const Page = () =>{
    const words = ["Companies", "Entrepreneurs", "Universities", "Developers", "Professionals", "you"];
    const [wordsIndex, setWordsIndex] = useState(0);
    const [characterIndex, setCharacterIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCharacterIndex(prevCharacterIndex => {
                if (prevCharacterIndex === words[wordsIndex]?.length) {
                    setWordsIndex(prevWordsIndex => (prevWordsIndex + 1) % words.length);
                    return 0;
                } else {
                    return prevCharacterIndex + 1;
                }
            });
        }, 340);

        return () => clearInterval(intervalId);
    }, [wordsIndex, characterIndex]);

    return (
        <>
            <SecondContainer>
                <div className="custom-shape-divider-top-1717532836">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="1%" stopColor="#101010" stopOpacity="1" />
                                <stop offset="200%" stopColor="#F4F4F2" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" fill="url(#waveGradient)"></path>
                    </svg>
                </div>
                <div className="textContainer">
                    <h2>!Nice To Meet you!</h2>
                    <p>We're the digital websites company <br />
                        for {words[wordsIndex]?.slice(0, characterIndex)} who want to<br />
                        explore and create <span className="secondSpan">Fantastic</span><br />
                        experiences.</p>
                    <button type="button" className="btn btn-outline-dark btn-lg">Know Us</button>
                </div>
                <div className="secondImgs">
                    <Image className="vertical" src="/images/vertical.jpg" alt="" width={400} height={350} />
                    <Image className="horizontal" src="/images/horizontal.jpg" alt="" width={400} height={350} />
                </div>
            </SecondContainer>
        </>
    );
}

export default Page;

const SecondContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    background-color: #f4f4f2;
    width: 100%;
    height: 40rem;
    display: flex;
    align-items: flex-start;
    text-align: left;
    font-family: "Poppins", sans-serif;
    position: relative;
    padding-top: 5rem;
    .secondImgs {
            position: relative;
            width: auto;
            height: auto;

            .vertical {
                width: 27rem;
                z-index: 1;
                position: absolute;
                bottom: -45rem;
                left: 10rem;
            }

            .horizontal {
                width: 30rem;
                z-index: 2;
                position: absolute;
                bottom: -50rem;
                left: -10rem;
                border: 4px solid #F4F4F2;
            }
        }
    .custom-shape-divider-top-1717532836 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-top-1717532836 svg {
        position: relative;
        display: block;
        width: calc(206% + 1.3px);
        height: 75px;
    }

    .custom-shape-divider-top-1717532836 .shape-fill {
        fill: url(#waveGradient);
    }

    .textContainer {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        z-index: 1;
        position: relative;

        h2 {
            margin-left: 10rem;
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 1rem;
        }

        p {
            margin-left: 10rem;
            font-size: 2rem;
            text-align: center;
        }
        button{
            margin-top: 2rem;
            margin-left: 10rem;
        }

        .firstSpan {
            position: relative;

            &::before {
                content: 'Companies';
                animation: words 20s infinite;
            }

            &::after {
                content: '';
                position: absolute;
                width: calc(100% + 8px);
                right: -8px;
                height: 100%;
                border-left: 2px solid black;
                animation: cursor .7s infinite, typing 20s steps(14);
            }
        }

        @keyframes cursor {
            to {
                border-left: 2px solid #FFFF00;
            }
        }

        @keyframes words {
            0%, 20% {
                content: 'Entrepreneurs';
            }
            21%, 40% {
                content: 'Universities';
            }
            41%, 60% {
                content: 'Developers';
            }
            61%, 80% {
                content: 'Professionals';
            }
            81%, 100% {
                content: 'you';
            }
        }

        @keyframes typing {
            10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95% {
                width: 0;
            }
            5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85% {
                width: calc(100% + 8px);
            }
        }

        .secondSpan {
            color: #101010;
        }
    }

    @media (max-width: 900px) {
        height: 50rem;
        
        .secondImgs {
            position: relative;
            width: auto;
            height: auto;

            .vertical {
                width: 23rem;
                z-index: 1;
                position: absolute;
                bottom: -40rem;
                left: 2rem;
            }

            .horizontal {
                width: 30rem;
                z-index: 2;
                position: absolute;
                bottom: -45rem;
                left: -22rem;
                border: 4px solid #F4F4F2;
            }
        }
        .textContainer {
            margin-left: 10px;
            margin-top: 5rem;
            display: flex;
            flex-direction: column;
            text-align: left;
            z-index: 1;
            position: relative;

            h2 {
                font-size: 39px;
            }

            p {
                font-size: 23px;
                text-align: left;
                margin: 0.5rem 0;
            }
        }
    }

    @media (max-width: 768px) {
        height: auto;
        padding-top: 3rem;
        padding-bottom: 15rem;

        .secondImgs {
            position: relative;
            width: auto;
            height: auto;

            .vertical {
                width: 15rem;
                z-index: 1;
                position: absolute;
                bottom: -28rem;
                left: 2.5rem;
            }

            .horizontal {
                width: 18rem;
                z-index: 2;
                position: absolute;
                bottom: -31rem;
                left: -12rem;
                border: 4px solid #F4F4F2;
            }
        }

        .textContainer {
            margin-left: 10px;
            color: #101010;

            h2 {
                font-size: 25px;
            }

            p {
                font-size: 15px;
                text-align: left;
                margin: 0.5rem 0;

                .secondSpan {
                    color: #101010;
                }
            }
        }
    }
`;