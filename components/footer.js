import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import { Col, Row } from "react-bootstrap";
import imgLogo from '../assets/image/logo.png'

const Footer = () => {
    return (
	    <footer>
			<div className="container">
                <Row className="gy-4">
                    <Col xxl={4}>
                        <img src={imgLogo} alt="logo" />
                        <div className="mt-3 mx-auto mx-lg-0" style={{maxWidth: "360px"}}>
                            MTVPunks DAO is community
                            running with thousands of
                            DAO members.
                        </div>
                    </Col>
                    <Col xxl={8}>
                        <Row className="gy-4">
                            <Col lg={4}>
                                <h4 className="mb-lg-4 mb-2">ABOUT US</h4>
                                <div className="mb-2">
                                    <a href="#" target="_blank">
                                        About
                                    </a> 
                                </div>                
                                <div className="mb-2">
                                    <a href="#" target="_blank">
                                        FAQ
                                    </a>
                                </div>       
                                <div className="mb-2">
                                    <a href="#" target="_blank">
                                        CONTACT
                                    </a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" target="_blank">
                                        Terms of Service
                                    </a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" target="_blank">
                                        Privacy
                                    </a>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <h4 className="mb-lg-4 mb-2">FOLLOW US</h4>
                                <div className="mb-2">
                                    <a href="#" target="_blank" className="follow-icon">
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                                        <span className="ms-2">Facebook</span>
                                    </a> 
                                </div>                
                                <div className="mb-2">
                                    <a href="#" target="_blank" className="follow-icon">
                                        <FontAwesomeIcon icon={['fab', 'twitter']}/>
                                        <span className="ms-2">Twitter</span>
                                    </a>
                                </div>       
                                <div className="mb-2">
                                    <a href="#" target="_blank" className="follow-icon">
                                        <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                        <span className="ms-2">Instagram</span>
                                    </a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" target="_blank" className="follow-icon">
                                        <FontAwesomeIcon icon={['fab', 'telegram-plane']}/>
                                        <span className="ms-2">Telegram</span>
                                    </a>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <h4 className="mb-lg-4 mb-2">CONTACT</h4>
                                <div className="mb-lg-3 mb-2 mail-icon">
                                    <FontAwesomeIcon icon={'envelope'} />
                                    <span className="ms-2">Lorem@gmail.com</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                                    <a href="#" target="_blank" className="social-icon">
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']} color="#7951EC"/>
                                    </a>                        
                                    <a href="#" target="_blank" className="social-icon">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} color="#7951EC"/>
                                    </a>
                                    <a href="#" target="_blank" className="social-icon">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} color="#7951EC"/>
                                    </a>
                                    <a href="#" target="_blank" className="social-icon">
                                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} color="#7951EC"/>
                                    </a>
                                    <a href="#" target="_blank" className="social-icon">
                                        <FontAwesomeIcon icon={['fab', 'google-plus-g']} color="#7951EC"/>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </div>
		</footer>
    );
  };
  
  export default Footer;
  