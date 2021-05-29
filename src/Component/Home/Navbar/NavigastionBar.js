import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
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
            <Nav variant="pills" >
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#blog">Blog</NavLink>
              <NavLink href="#contract">Contract</NavLink>
            </Nav>
          </NavbarCollapse>

          <NavbarCollapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <a className="btn-band" href="#link">Resume</a>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    );
};

export default NavbarArea;