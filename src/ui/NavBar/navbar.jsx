"use client"
import Link from "next/link"
import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import styled from 'styled-components';

export default function NavBar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const closeMenu = () => {
        setClicked(false);
    };

    return (
        <>
            <NavContainer>
                <h2>Web<span>Mosaic</span></h2>
                <BgDiv className={`${clicked ? 'active' : ''}`}></BgDiv>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <Link href="/Home" onClick={closeMenu}>Home</Link>
                    <Link href="/aboutus" onClick={closeMenu}>About Us</Link>
                    <Link href="/ourservices" onClick={closeMenu}>Services</Link>
                    <Link href="/Emails" onClick={closeMenu}>Contact Us</Link>
                </div>
                <div className="burgerContainer">
                    <Hamburger toggled={clicked} toggle={setClicked} color="#F1511B" easing="ease-in" size={48} direction="left" />
                </div>
            </NavContainer>
        </>
    );
}

const NavContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
    z-index: 30;
    position: sticky;
    top: 0;
    padding: 10px;
    background-color: #101010;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #F4F4F2;
    
    h2 {
        font-family: "Rubik", sans-serif;
        color: #F4F4F2;
        font-weight: 500;
        font-size: 2rem;
        span {
            font-family: "Rubik", sans-serif;
            font-weight: 800;
            color: #DDF247;
        }
    }

    @media(min-width: 768px) {
        h2 {
            font-size: 2.5rem;
        }
    }

    a {
        font-weight: 300;
        color: black;
        text-decoration: none;
        margin-right: 1rem;
        margin-left: 1rem;
    }

    .links {
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        z-index: 20; /* Links on top of BgDiv */
        a {
            color: #F4F4F2;
            font-size: 2rem;
            display: block;
        }

        @media(min-width: 768px) {
            position: initial;
            margin: 0;
            display: flex;
            a {
                display: inline;
                font-size: 1rem;
            }
        }
    }

    .links.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 60%;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 20; /* Links on top of BgDiv */
        a {
            color: #FFFF00;
            font-size: 2.3rem;
            margin-top: 2rem;
        }

        @media(min-width: 768px) {
            display: flex;
            position: initial;
            top: initial;
            a {
                color: #F4F4F2;
                font-size: 1rem;
                margin-top: 0;
                margin-right: 1rem;
                margin-left: 1rem;
            }
        }
    }

    .burgerContainer {
        position: relative;
        z-index: 30; /* Burger on top of everything */
        @media(min-width: 768px) {
            display: none;
        }
    }
`;

const BgDiv = styled.div`
    position: absolute;
    background-color: #2C2B2B;
    top: -1000px;
    left: -1000px;
    z-index: 15; /* BgDiv behind links */
    width: 100%;
    height: 100%;
    transition: all .6s ease;

    &.active {
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 500px;
    }

    @media(min-width: 768px) {
        height: 300px;

        &.active {
            height: 300px;
        }
    }
`;