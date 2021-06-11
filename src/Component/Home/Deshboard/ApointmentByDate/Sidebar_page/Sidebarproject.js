import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import Work from '../../../Work/Work';
import Sidebar from '../../Sidebar/Sidebar';
import AddProject from './AddProject';

const sidebarproject = () => {
    return (
        <Row>
            <Col md={3}>
                <div className="">
                    <Sidebar></Sidebar>
                </div>
            </Col>

            <Col md={9}>
                <AddProject></AddProject>
            </Col>
            
        </Row>
    );
};

export default sidebarproject;