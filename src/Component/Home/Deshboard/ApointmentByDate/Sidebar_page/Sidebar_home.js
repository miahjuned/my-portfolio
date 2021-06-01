import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Home from '../../../Home/Home';
import Sidebar from '../../Sidebar/Sidebar';

const Sidebar_home = () => {
    return (
        <Container>
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
        </Container>
    );
};

export default Sidebar_home;