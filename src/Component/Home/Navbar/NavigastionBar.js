import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import './Navbar.css';
const NavbarArea = () => {
    return (
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
          <NavbarBrand href="#home" ><span className="text-Navbar">Juned Ahmed</span></NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <NavbarCollapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="navLink">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contract">Contract</Link>
            </Nav>
          </NavbarCollapse>

          <NavbarCollapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <a className="btn-band" href="https://drive.google.com/file/d/1XiVZxqO8q0NLgZZB59sXmZmNhN10z2a8/view">Resume</a>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    );
};

export default NavbarArea;