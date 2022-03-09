import React from "react"
import Image from "next/image"
import { Button, Row, Col } from "react-bootstrap";
import imgHero from "../../assets/image/hero.png"

const SectionHero = () => {
    return (
	    <section className="section-hero">
            <Row className="gy-3 align-items-center">
                <Col lg={6}>
                    <div className="hero-image-container">
                        <img src={imgHero} className="w-100" />
                    </div>
                </Col>
                <Col lg={6} className="py-3 ps-lg-5">
                    <h2>MPVPunks voting is purpose to set the direction of development by the DAO members.</h2>
                    <h3 className="hero-description">
                        Anyone can be MTVPunks DAO members.
                    </h3>
                    <Button variant="secondary">
                        vote now
                    </Button>
                </Col>
            </Row>
		</section>
    );
  };
  
  export default SectionHero;
  