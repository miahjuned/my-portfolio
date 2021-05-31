import React from 'react';
import './Education.css';
import { Col, Row } from 'react-bootstrap';

const Education = () => {
    document.title = "About me";

    return (
        <Row>
            <Col sm={6} md={6} lg={6}>
                <div className="block">
                    <div className="block-title">
                        <h3>Education</h3>
                    </div>

                    <div className="timeline">
                        {/*  <!-- Education 1 --> */}
                        <div className="timeline-item">
                            <h4 className="item-title">BBA in Accounting</h4>
                            <span className="item-period">Session 2016-17 - Running(Final Year)</span>
                            <span className="item-small">National University in Bangladesh</span>
                            <p className="item-descripstion">Currently a Final Year Student (BBA) in Business Administration in Accounting Programs.
                            <br />
                                <span>
                                   <strong className="activities"> Activities and Societies:</strong> • Power point presentation • Web development competition. • Cultural Club member. • Team Aaccounting member • BNCC representative. • Sports Club member. • Winner of Football mini Futsal Prize 2019 On Campus Round • Semi Finalist of Cricket Hult Prize 2019 On Campus Round • Winner of Basic Computer Competition On Campus Round 2020
                                </span>
                            </p>
                        </div>

                        {/* Education 2 */}
                        <div className="timeline-item">
                            <h4 className="item-title">Higher Secondary Certificate</h4>
                            <span className="item-period">2013-2015</span>
                            <span className="item-small">Moulvibazar govt college</span>
                            <p className="item-descripstion">I have completed my Higher Secondary Certificate from Moulvibazar govt college being a Topper of my class.
                            <br />
                                <span>
                                   <strong className="activities"> Activities and Societies:</strong> • Power point presentation • Web development competition. • Cultural Club member. • BNCC representative. • Sports Club member. 
                                </span>
                            </p>
                        </div>


                        {/* Education 3 */}
                        <div className="timeline-item">
                            <h4 className="item-title">Secondary School Certificate</h4>
                            <span className="item-period">2003-2013</span>
                            <span className="item-small">Dighal Bhak High School</span>
                            <p className="item-descripstion">
                                I have completed my Secondary School Certificate from Dighal Bhak High Schol being a Topper of my class.
                                <br />
                                <span>
                                   <strong className="activities"> Activities and Societies:</strong> • Web development competition. • Cultural Club member. • BNCC representative. • Sports Club member.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col sm={6} md={6} lg={6}>
                <div className="block">
                    <div className="block-title">
                        <h3>Experience</h3>
                    </div>

                    {/* Experience */}
                    <div className="timeline">

                        {/* Experience 1 */}
                        <div className="timeline-item">
                            <h4 className="item-title">Experience 1</h4>
                            <span className="item-period">2015 - 2016</span>
                            <span className="item-small">Google LLC</span>
                            <p className="item-descripstion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni!</p>
                        </div>
                        {/* Experience 2 */}
                        <div className="timeline-item">
                            <h4 className="item-title">Experience 2</h4>
                            <span className="item-period">2015 - 2016</span>
                            <span className="item-small">Google LLC</span>
                            <p className="item-descripstion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni!</p>
                        </div>
                        {/* Experience 3 */}
                        <div className="timeline-item">
                            <h4 className="item-title">Experience 3</h4>
                            <span className="item-period">2015 - 2016</span>
                            <span className="item-small">Google LLC</span>
                            <p className="item-descripstion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni!</p>
                        </div>

                        
                    </div>
                </div>

            </Col>
        </Row>
    );
};

export default Education;