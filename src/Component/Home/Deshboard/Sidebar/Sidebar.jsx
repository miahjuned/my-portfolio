import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container" >
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
        </div>
    );
};

export default Sidebar;