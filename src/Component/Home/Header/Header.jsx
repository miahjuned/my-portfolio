import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroImage from "../../../Images/juned.png";
import './Header.css';
const Header = () => {
    return (
        <div className="Header_Area container-fluid">
            <Container>
                <Row className="Header_Row">
                    <Col xs={12} sm={12} md={6} lg={6} className="header_content">
                        <div className="header_info d-flex flex-wrap">
                            <h1 className="text-band">Hello! This is Juned Ahmed</h1>
                            <p className="text-center">
                                Designer | Developer | Explorer
                            </p>
                            <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                            <div className="header-btn d-flex flex-wrap">
                                <Link className="btn-band" to="/about" rel="noopener noreferrer">About me</Link>
                                <Link className="btn-band-outline" to="/contract" rel="noopener noreferrer">Get In Touch</Link>
                            </div>
                        </div>
                    </Col>
                    <Col className="hero_img" xs={12} sm={12} md={6} lg={6}>
                        <Image src={HeroImage} fluid  />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;