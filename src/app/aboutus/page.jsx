"use client"
import React, {useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaCircleCheck } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';
import styled from "styled-components";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
const Page = () =>{
    /*AOS*/
    useEffect(() => {
        Aos.init();
    },)
    /*********************************************/

    const [header] = React.useState({
        mainHeader: "Frequently Asked"
    });
    const [state] = React.useState([
        {
            id: 1,
            icon: <FaCircleCheck className="commonIcons" />,
            heading: "What IT solutions does your company offer ?",
            text:
                "Our company offers a wide range of IT solutions including network infrastructure setup, cloud computing services, cybersecurity solutions, software development, and IT consulting services.",
        },
        {
            id: 2,
            icon: <FaCircleCheck className="commonIcons" />,
            heading: "How can IT solutions benefit my business ?",
            text:
                "IT solutions can benefit your business by improving operational efficiency, enhancing productivity, ensuring data security, providing access to advanced technologies, and enabling better decision-making through data analytics.",
        },
        {
            id: 3,
            icon: <FaCircleCheck className="commonIcons" />,
            heading: "Are your IT solutions customizable to suit our business requirements ?",
            text:
                "Yes, our IT solutions are highly customizable and tailored to meet the unique requirements of each business. We work closely with our clients to understand their specific needs and provide customized solutions accordingly.",
        },
        {
            id: 4,
            icon: <FaCircleCheck className="commonIcons" />,
            heading: "Do you provide ongoing support and maintenance for the IT solutions ?",
            text:
                "Yes, we offer comprehensive support and maintenance services for the IT solutions we provide. Our team of skilled professionals ensures that your systems are up-to-date, secure, and performing optimally at all times.",
        },
    ]);

    return (
        <Aboutus>
            <div className="about">

                <section className="page__title">
                    <div className="container">
                        <div className="aboutus__img" data-aos="flip-left">
                            <Image src="/images/about1.jpg" className="rounded" alt="about us"  width={1020} height={450} />
                        </div>
                        <div className="content row">
                            <div className="col-md-4 d-flex">
                                <div className="content__text text-center" data-aos="zoom-out-down">
                                    <h1 className="display-5 fw-bold">About Us</h1>
                                    <p className="display-6">OUR HISTORY</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="aboutus__info mt-0 mb-0" data-aos="flip-right">
                                    <h1 className="aboutus__title text-black mb-3" data-aos="fade-right">Who We are</h1>
                                    <div className="about__text fs-5">
                                        <p className="aboutus__info-p1" data-aos="fade-left">
                                            Welcome to WebMosaic, where innovation meets reliability. Founded on the principles of cutting-edge technology and unwavering commitment to excellence, we are your trusted partner for business services and IT solutions.
                                        </p>
                                        <p className="about__info-p2" data-aos="fade-left">
                                            At WebMosaic, we are a team of passionate professionals dedicated to empowering businesses with transformative technology solutions. With a rich history of successful partnerships and a forward-thinking approach, we strive to be at the forefront of the ever-evolving tech landscape.
                                        </p>
                                    </div>
                                    <div class="d-flex justify-content-center mt-4">
                                        <a href="/contactus" class="btn btnanimate fw-bold" tabindex="-1" role="button">CONTACT US</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <section className="container">
                    <div className="content row">
                        <div className="col-md-6">
                            <div className="aboutus__info mt-0 mb-0" data-aos="flip-right">
                                <h1 className="aboutus__title text-black mb-3 mt-0" data-aos="fade-right">Our Mission</h1>
                                <div className="about__text fs-5">
                                    <p className="aboutus__info-p1 mb-0" data-aos="fade-left">
                                        Our mission is to drive your success through innovative and tailored IT solutions. We believe in the power of technology to propel businesses forward, and we are committed to delivering solutions that not only meet but exceed your expectations.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col mt-5 ms-4 fs-4">
                                    <Stack className="bagde" direction="horizontal" gap={4}>
                                        <Badge bg="dark">HTML</Badge>
                                        <Badge bg="dark">CSS</Badge>
                                        <Badge bg="dark">BOOTSTRAP</Badge>

                                    </Stack>
                                </div>
                                <div className="col mt-3 ms-4 fs-4">
                                    <Stack direction="horizontal" gap={4}>
                                        <Badge bg="dark">JAVASCRIPT</Badge>
                                        <Badge bg="dark">REACT</Badge>
                                        <Badge bg="dark">PYTHON</Badge>
                                    </Stack>
                                </div>
                            </div>
                        </div>
                        <div className="items-content-center col-md-6">
                            <Image src="/images/about1.jpg" alt="about us" className="rounded-5" width={480} height={500} />
                        </div>
                    </div>
                </section>

                <section className="question">
                    <div className="container" data-aos="zoom-in-up">
                        <div className="container_question">
                            <div className="question__header" data-aos="fade-up-left">
                                <div className="common">
                                    <h2 className="heading text-light fs-1">{header.mainHeader}<span className="txt-color"> Questions</span></h2>
                                    <div className="commonBorder bg-light"></div>
                                </div>
                            </div>
                                <div className="row mt-5">

                                    <div className="col-md-6">
                                        <Image src="/images/about2.jpg" alt="about us" className="rounded-5" width={450} height={400} />
                                    </div>

                                    <div className="accordion col-md-6 mb-3">
                                    {state.map((info) => (
                                        <Accordion.Item key={info.id} eventKey={info.id}>
                                            <Accordion.Header>
                                            <span className="commonIcons">{info.icon}</span>
                                            {info.heading}
                                            </Accordion.Header>
                                            <Accordion.Body className="bg-dark --bs-bg-opacity: .5; text-light fs-5">
                                            {info.text}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                    </div>

                                </div>
                            
                        </div>
                    </div>
                </section>
            </div>
        </Aboutus>
    )
}
export default Page;
const Aboutus = styled.section`
  
  .page__title,
  .page__contact {
    padding: 50px;
    background: #101010;
  }
  
  .container {
    margin-inline: auto;
    max-width: 68em;
    padding-inline: 1rem;
  }
  
  .content__text {
    color: #DDF247;
  }
  
  .aboutus__info {
    font-family: "Poppins", sans-serif;
    padding: 40px;
    background: #DDF247;
    transition: all 0.5s linear;
  }
  
  .content {
    margin: 6rem 0rem;
  }

  .btnanimate{
    background: #101010;
    border:none;
    color: #F4F4F2;
    width: 80%;
    transition: .4s all;
  }

 .btnanimate:hover {
    transform: scale(1.2);
  }
  
  /*******QUESTION******/
  /*Question*/
  .question {
    background: #101010;
    padding: 100px 0;
  }
  
  .common {
    width: 40%;
    margin: 20px auto;
    text-align: center;
  }
  
  .heading {
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
  }
  
  .txt-color {
    color: #DDF247;
  }
  
  .commonBorder {
    height: 3px;
    width: 200px;
    margin: 30px auto;
  }
.commonIcons {
  font-size: 40px;
  color: #F1511B;
  margin-right: 8px;
}
  /** BAGDE **/
  .badge:hover{
    color: #DDF247;
  }
`