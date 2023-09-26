import React from "react";
import logo from "../assets/rr-logo.png";
import {Nav, Navbar, Container, NavLink} from 'react-bootstrap';
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return(
  <Navbar 
    className={styles.NavBar}
    expand="md"
    fixed="top"
  >
    <Container>
        <NavLink>
            <Navbar.Brand href="/">
                <img src={logo} alt="logo" height="80" />
            </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
                <NavLink 
                    href="#home" 
                    className={styles.NavLink}
                    activeClassName={styles.Active}>
                    <i className="fas fa-home"></i> Home
                </NavLink>
                <NavLink 
                    href="#home" 
                    className={styles.NavLink}
                    activeClassName={styles.Active}>
                    <i className="fas fa-sign-in-alt"></i> Sign In
                </NavLink>
                <NavLink href="#home" 
                    className={styles.NavLink}
                    activeClassName={styles.Active}>
                    <i className="fas fa-user-plus"></i> Sign Up
                </NavLink>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>);
};

export default NavBar