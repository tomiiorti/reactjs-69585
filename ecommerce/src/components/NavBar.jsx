import React from 'react'
import Navbar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#categories">Categories</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}
