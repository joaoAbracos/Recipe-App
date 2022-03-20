import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
let NavBar = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container >
                <Navbar.Brand >🌮Recipe App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-center">
                        <Link to="/recipes" className="nav-link">Recipes</Link>
                        <Link to="/createrecipe" className="nav-link">Create Recipe</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
export default NavBar;
