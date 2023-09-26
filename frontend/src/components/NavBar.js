import React from "react";
import logo from "../assets/rr-logo.png";
import {Nav, Navbar, Container} from 'react-bootstrap';

const NavBar = () => {
  return(
  <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="logo" height="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-left">
            <Nav.Link href="#home" className="mr-auto text-left">
                <i className="fas fa-home"></i> Home
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>);
};

export default NavBar