import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
const Footer = () => {
    
    return (
        <div className="footer_Area">
            <Container>
                <Row className="pt-5 mt-5">
                    <Col xs={7} sm={6} md={7} lg={7}>
                        <div className="">
                            <h2 className="text-dark">Let's make something great together.</h2>
                            <a className="btn-band" href="https://github.com/zunead" target="_blank" rel="noopener noreferrer">Connect Me - LinkedIn</a>

                        </div>
                    </Col>
                    <Col className="text-dark" xs={5} sm={6} md={5} lg={5}>
                        <div>
                            <h5 className="text-dark small-text-band">Contract Address</h5>
                            <h6>Skype: Juned133</h6>
                            <h6>Mobile: 01742106133</h6>
                            <h6>Email: Juned0941@gmail.com</h6>
                            <h6 className="pt-2">
                                <a className="small-text-band mr-2" href="https://github.com/zunead" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithubSquare} />
                                </a>
                                <a className="small-text-band mr-2" href="https://facebook/juned133" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a>
                                <a className="small-text-band " href="https://linkedin/zunead" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>

                            </h6>
                            <hr />
                        </div>
                    </Col>
                    <h6 className="text-dark text-center w-100 " >I designed and coded this website from scratch. © 2021 <hr /></h6>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;