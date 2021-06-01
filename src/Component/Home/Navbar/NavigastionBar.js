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
              <Link className="navItem" to="/home">Home</Link>
              <Link className="navItem" to="/about">About</Link>
              <Link className="navItem" to="/work">Work</Link>
              <Link className="navItem" to="/blog">Blog</Link>
              <Link className="navItem" to="/contract">Contract</Link>
              <Link className="navItem" to="/deshboard">Deshboard</Link>
            </Nav>
          </NavbarCollapse>

          <NavbarCollapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <a className="btn-band" href="https://drive.google.com/file/d/1XiVZxqO8q0NLgZZB59sXmZmNhN10z2a8/view" target="_blank" rel="noreferrer">Resume</a>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    );
};

export default NavbarArea;