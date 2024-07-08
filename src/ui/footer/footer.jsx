"use client"
import React from "react";
import styled from "styled-components";
export default function footer(){
    return (
        <FooterContainer>
            <TopLine />
            <FooterContent>
            <LeftContent>
                <p>Información breve sobre la empresa o servicio.</p>
            </LeftContent>
                <RightContent>
                    <FooterLinks>
                        <div><a href="#">Contact Us</a></div>
                        <div><a href="#">About Us</a></div>
                    </FooterLinks>
                </RightContent>
            </FooterContent>
        </FooterContainer>
    );
}
const FooterContainer = styled.footer`
  background-color: white;
  color: black;
  padding: 20px 0;
`;

const TopLine = styled.div`
  height: 2px;
  background-color: black;
  margin-bottom: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const FooterLinks = styled.div`
  width: 100%;

  div {
    display: inline-block;
    width: 100%;
    margin: 0 auto 1rem;
    padding: 1rem;
    border-bottom: 2px solid black;
    text-align: left;

    &:hover {
      background-color: #DDF247;
    }

    @media (max-width: 768px) {
      text-align: center;
      margin: 0;
    }
  }

  a {
    color: black;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }
`;

