import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ApointmentByDate from '../ApointmentByDate/ApointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import './Deshboard.css';
const Deshboard = () => {
    return (
        <Row className="dashboard">
            <Col xs={12} sm={12} lg={4} md={2}>
                <div  >
                    <Sidebar></Sidebar>
                </div>
            </Col>
            <Col md={5} xs={12} sm={12} lg={4}>
                <div className="" >
                    <h1>Caendar</h1>
                </div>
            </Col>
            <Col xs={12} sm={12} lg={4} md={5} >
                <div className="" >
                    <ApointmentByDate></ApointmentByDate>
                </div>
            </Col>
            
            </Row>
    );
};

export default Deshboard;