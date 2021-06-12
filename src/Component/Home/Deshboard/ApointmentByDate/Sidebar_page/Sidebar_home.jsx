import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Home from '../../../Home/Home';
import Sidebar from '../../Sidebar/Sidebar';

const Sidebar_home = () => {
    return (
        <Row>
            <Col xs={12} sm={12} lg={3} md={3}>
                <div className="">
                    <Sidebar></Sidebar>
                </div>
            </Col>
            <Col xs={12} sm={12} lg={9} md={9}>
                <Home></Home>
            </Col>
        </Row>
    );
};

export default Sidebar_home;