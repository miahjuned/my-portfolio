import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <Container className="sidebar-container" >
            <div className="sidebar">
                <h1>Admin Panel</h1>
                <hr />
                <ul className="navLink">
                    <li>
                        <Button><Link to="/deshboard">Dashboard</Link></Button>
                    </li>
                    <li>
                        <Button><Link to="/sidebarhome">Home</Link></Button>
                    </li>
                    <li>
                        <Button><Link to="/sidebarblog">Blog</Link> </Button>
                    </li>
                    <li>
                        <Button><Link to="/sidebarproject">Add Project</Link></Button>
                    </li>
                </ul>
            </div>
        </Container>
    );
};

export default Sidebar;