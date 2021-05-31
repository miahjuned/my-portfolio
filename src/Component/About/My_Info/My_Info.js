import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './My_Info.css';
import photo from '../../../Images/juned.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const My_Info = () => {
    return (
        <section className="section-inner my-info">
            <div className="page-header">
                <Row>
                    <Col className="mb-3 pb-5" xs={12} sm={12} md={4} lg={4}>
                        <div className="photo">
                            <Image src={photo} fluid  />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <div className="title-block">
                            <h1>Juned Ahmed</h1>
                            <div className="owl-carousel text-rotation">
                                <div className="item">
                                    <div className="sp-subtitle">Designer  |  Developer  |  Explorer</div>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://facebook.com/Zuned33" target="_blank" rel="noreferrer">
                                <i><FontAwesomeIcon icon={faFacebookSquare} /></i> 
                            </a>
                            <a href="https://linkedin/zunead" target="_blank" rel="noreferrer">
                                <i><FontAwesomeIcon icon={faLinkedin} /></i>
                            </a>
                            <a href="https://github.com/zunead" target="_blank" rel="noreferrer">
                                <i><FontAwesomeIcon icon={faGithubSquare} /></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                
            </div>
                
            <div className="page-content">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="about-me">
                            <div className="block-title">
                                <h3>About <span>Me</span></h3>
                            </div>
                            <article>I am Juned Ahmed. I'm a passionate Web developer. Whenever I got the scope, I used to play with coding Every of the time, I used to set myself to make a proper structure by coding. 
                            </article>
                            <article className="pt-2 pb-2">
                                I enjoy developing applications using modern technologies. Proficient in HTML, CSS, JavaScript, Reactjs, Nodejs, Expressjs and MongoDB. Passionate about new technologies and problem solving.
                            </article>
                        </div>
                        <div className="download-resume">
                            <a className="btn-band-outline" href="https://drive.google.com/uc?id=1XiVZxqO8q0NLgZZB59sXmZmNhN10z2a8&export=download" target="_blank" rel="noreferrer"> 
                                <FontAwesomeIcon icon={faDownload} /> Download Resume
                            </a>
                        </div>
                    </Col>


                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div>
                            <ul className="info-list">
                                <li>
                                    <span className="title">Age</span>
                                    <span className="value"> 24</span>
                                </li>
                                <li>
                                    <span className="title">Residence</span>
                                    <span className="value"> Bangladesh</span>
                                </li>
                                <li>
                                    <span className="title">Present Address</span>
                                    <span className="value">Moulvibazar</span>
                                </li>
                                <li>
                                    <span className="title">E-mail</span>
                                    <span className="value">
                                        <a href="mailto:Juned0941@gmail.com">
                                            Juned0941@gmail.com
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <span className="title">Phone</span>
                                    <span className="value">+8801742106133</span>
                                </li>
                                <li>
                                    <span className="title">Skype</span>
                                    <span className="value">Juned133</span>
                                </li>
                                <li>
                                    <span className="title">Freelance</span>
                                    <span className="value">Available</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default My_Info;