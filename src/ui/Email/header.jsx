"use client"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DDF247;
    padding-bottom: 2rem;
    padding-top: 2rem;
`
const Page = () =>{
    return (
        <Container>
            <h1 className="poppins-bold fw-bold">YOUR EMAILS</h1>
            <h1 className="poppins-light">DO YOUT NEED HELP?</h1>
        </Container>
    )
}
export default Page;