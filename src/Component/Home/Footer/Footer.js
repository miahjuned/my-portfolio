import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer_Area">
            <Container>
                <Row className="pt-5 mt-5">
                    <Col md={7}>
                        <h2 className="text-dark">Let's make something great together.</h2>
                        <a className="btn-band" href="#" target="_blank" rel="noopener noreferrer">Connect Me - LinkedIn</a>

                    </Col>
                    <Col className="text-dark text-center" md={5}>
                        <h5 className="text-dark">Contract Address</h5>
                        <h6>Skype: Juned133</h6>
                        <h6>Mobile: 01742106133</h6>
                        <h6>Email: Juned0941@gmail.com</h6>
                        <h6 className="pt-3">
                             <a className="btn-band mr-2" href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                             <a className="btn-band  mr-2" href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                             <a className="btn-band " href="#" target="_blank" rel="noopener noreferrer">Github</a>

                        </h6>
                        <hr />
                    </Col>
                    <h6 className="text-dark text-center w-100" >I designed and coded this website from scratch. © 2021</h6>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;