import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Work.css';
const Work = () => {
    return (
        <div className="Work_Area">
            {/* <div className="center-under-line"></div> */}
            <Container className="">
                <Row className="">
                <Col md={3} className="work_Row">
                        <div className="">
                            <div className="">
                                <h2><span className="small-text-band">Some of</span> my work</h2>
                            </div>
                            
                        </div>
                    </Col>
                    <Col md={7} className="work_Row">
                        
                        <div className="text-center">
                            
                            <div className="center-line"></div>
                            <a href="#" className="btn-band">All Works</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Work;








                    {/* <Col xl={6} md={6} className="bg-primary  ">
                        <div className="text-center bg-warning">
                            <h2><span className="small-text-band">Some of</span> my work</h2>
                        </div>
                    </Col>
                    <Col xl={6} md={6} className="text-center bg-dark">
                        <div className="text-center bg-warning">
                            <div className="center-line"></div>
                            <a href="#" className="btn-band-outline">All Works</a>
                        </div>
                    </Col> */}