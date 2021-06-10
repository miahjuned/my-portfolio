import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ApointmentByDate from '../ApointmentByDate/ApointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import './Deshboard.css';
const Deshboard = () => {
    return (
        <div>
            <Row className="dashboard">
                <Col md={3}>
                    <div  >
                        <Sidebar></Sidebar>
                    </div>
                </Col>
                <Col md={5} >
                    <div className="" >
                        <h1>Caendar</h1>
                    </div>
                </Col>
                <Col  md={4} >
                    <div className="" >
                        <ApointmentByDate></ApointmentByDate>
                    </div>
                </Col>
                
            </Row>
        </div>
    );
};

export default Deshboard;