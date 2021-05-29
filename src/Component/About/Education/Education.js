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
                            <span className="item-period">2016-Running</span>
                            <span className="item-small">National University in Bangladesh</span>
                            <p className="item-descripstion">Bachelor of Business Administration (BBA) in Accounting programs combine the fundamentals of a business program with concentrated coursework in accounting.</p>
                        </div>

                        {/* Education 2 */}
                        <div className="timeline-item">
                            <h4 className="item-title">HSC</h4>
                            <span className="item-period">2013-2015</span>
                            <span className="item-small">Moulvibazar govt college</span>
                            <p className="item-descripstion">The Higher Secondary Certificate, also known as HSC or Intermediate or +2 examination, is a public examination taken by students of intermediate college in Bangladesh</p>
                        </div>


                        {/* Education 3 */}
                        <div className="timeline-item">
                            <h4 className="item-title">HSC</h4>
                            <span className="item-period">2013-2015</span>
                            <span className="item-small">Google LLC</span>
                            <p className="item-descripstion">The Higher Secondary Certificate, also known as HSC or Intermediate or +2 examination, is a public examination taken by students of intermediate college in Bangladesh</p>
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