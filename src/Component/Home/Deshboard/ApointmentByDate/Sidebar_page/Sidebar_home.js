import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Home from '../../../Home/Home';
import Sidebar from '../../Sidebar/Sidebar';

const Sidebar_home = () => {
    return (
        <div>
            <Row>
                <Col md={3}>
                    <div className="">
                        <Sidebar></Sidebar>
                    </div>
                </Col>
                <Col md={9}>
                    <Home></Home>
                </Col>
            </Row>
        </div>
    );
};

export default Sidebar_home;