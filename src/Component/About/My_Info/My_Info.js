import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './My_Info.css';
import photo from '../../../Images/juned.png';
const My_Info = () => {
    return (
        <section className="section-inner my-info">
            <div className="page-header">
                <Row>
                    <Col sm={4} md={4} lg={4}>
                        <div className="photo">
                            <Image src={photo} fluid  />
                        </div>
                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <div className="title-block">
                            <h1>Juned Ahmed</h1>
                            <div className="owl-carousel text-rotation">
                                <div className="item">
                                    <div className="sp-subtitle">Designer</div>
                                </div>
                                <div className="item">
                                    <div className="sp-subtitle">Developer</div>
                                </div>
                                <div className="item">
                                    <div className="sp-subtitle">Explorer</div>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://facebook.com/Zuned33" target="_blank" rel="noreferrer"><i>Facebook</i> </a>
                            <a href="https://facebook.com/Zuned33" target="_blank" rel="noreferrer"><i>Twitter</i></a>
                            <a href="https://facebook.com/Zuned33" target="_blank" rel="noreferrer"><i>Github</i></a>
                        </div>
                    </Col>
                </Row>
                
            </div>
                
            <div className="page-content">
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <div className="about-me">
                            <div className="block-title">
                                <h3>About <span>Me</span></h3>
                            </div>
                            <p>Hello! I am Juned Ahmed. Completed my BBA from National university of Bangladesh. My major subject was Accounting.
                                <br/>
                                Now I am a full time freelancer. My focus is to work in global marketplace. Generally I am interested to work in WordPress projects of both Design & Development. I will be able to complete whole process of web Development. <br/> <br/>
                                I am best in All kind of wordpress customization experience.
                                <br/>
                                Web developing is not only a job but also a passion for me and always be.
                                Most importantly I can work hard & complete tasks within the time frame.
                            </p>
                        </div>
                        <div className="download-resume">
                            <a className="btn-band-outline" href="https://facebook.com/Zuned33" target="_blank" rel="noreferrer">Download Resume</a>
                        </div>
                    </Col>


                    <Col sm={6} md={6} lg={6}>
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