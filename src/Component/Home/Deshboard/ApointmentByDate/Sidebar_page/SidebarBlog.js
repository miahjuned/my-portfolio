import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Blog from '../../../Blog/Blog';
import Sidebar from '../../Sidebar/Sidebar';

const SidebarBlog = () => {
    return (
        <Row>
            <Col md={3}>
                <div className="">
                    <Sidebar></Sidebar>
                </div>
            </Col>
            <Col md={9}>
                <Blog></Blog>
            </Col>
        </Row>
    );
};

export default SidebarBlog;