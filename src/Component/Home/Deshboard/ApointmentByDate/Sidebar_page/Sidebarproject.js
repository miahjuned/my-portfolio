import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Work from '../../../Work/Work';
import Sidebar from '../../Sidebar/Sidebar';

const sidebarproject = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <div className="">
                        <Sidebar></Sidebar>
                    </div>
                </Col>

                <Col md={9}>
                    <Work></Work>
                </Col>
                
            </Row>
        </Container>
    );
};

export default sidebarproject;