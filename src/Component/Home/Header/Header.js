import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import HeroImage from "../../../Images/juned.png";
import './Header.css';
const Header = () => {
    return (
        <div className="Header_Area">
            <Container>
                <Row className="Header_Row">
                    <Col md={6} className="">
                        <div className="">
                            <h1 className="text-band">Hello! This is Juned Ahmed</h1>
                            <p className="text-center">
                                Designer | Developer | Explorer
                            </p>
                            <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                            <a className="btn-band mr-4" href="#">About me</a>
                            <a className="btn-band-outline" href="#">Get In Touch</a>
                            
                        </div>
                    </Col>
                    <Col className="hero_img" md={6}>
                        <Image src={HeroImage} fluid  />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;