import React, {useState, useEffect} from "react"
import { Navbar as BNavbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import imgLogo from '../assets/image/logo.png'
import { Button, Row, Col } from "react-bootstrap"

const NavBar = () => {
    return (
        <BNavbar collapseOnSelect expand="xl" className="land-nav navbar-default" variant="dark">
            <div className="container">
                <BNavbar.Brand href="#" className="d-none d-xl-block">
                    <img src={imgLogo} alt="logo" />
                </BNavbar.Brand>

                <Row className="navbar-header align-items-center d-xl-none w-100 h-100 gx-0">
                    <Col xs={2}>
                        <BNavbar.Toggle aria-controls="responsive-navbar-nav" className="text-white" >
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#7951EC"/>
                                <path d="M8.25562 18H21.3186" stroke="white"/>
                                <path d="M8.25562 12.1666H27.7444" stroke="white"/>
                                <path d="M8.25562 23.8334H27.7444" stroke="white"/>
                            </svg>
                        </BNavbar.Toggle>
                    </Col>
                    <Col xs={8} className="d-flex justify-content-center">
                        <BNavbar.Brand href="#" className="d-xl-none mx-auto">
                            <img src={imgLogo} alt="logo" />
                        </BNavbar.Brand>
                    </Col>
                    <Col xs={2}>
                    </Col>
                </Row>

                <BNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav w-100 justify-content-end align-items-center" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#mainpage">Main</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#packages">Proposal Submit</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Button variant="secondary" className="mx-2 my-1">connect wallet</Button>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Button variant="primary" className="mx-2 my-1">JOIN NOW</Button>
                        </Nav.Item>
                    </Nav>
                </BNavbar.Collapse>
            </div>
        </BNavbar>
    );
  };
  
  export default NavBar;
  