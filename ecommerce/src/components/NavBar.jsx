import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap';
import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { getCategories } from '../firebase/db';
import '../css/Navbar.css'; // Archivo CSS para estilos personalizados

export default function AppNavbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(data => setCategories(data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar">
      <Container fluid>
        {/* Logo/Marca a la izquierda */}
        <Navbar.Brand as={NavLink} to="/" className="brand-logo">
          E-commerce
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links centrales */}
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" exact className="nav-link-custom">
              Home
            </Nav.Link>
            
            <Dropdown className="mx-2">
              <Dropdown.Toggle variant="dark" id="dropdown-categories" className="dropdown-custom">
                Categorías
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                {categories.map(cat => (
                  <Dropdown.Item 
                    as={NavLink} 
                    to={`/category/${cat}`} 
                    key={cat}
                    className="dropdown-item-custom"
                  >
                    {cat}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link as={NavLink} to="/about" className="nav-link-custom">
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>

          {/* Carrito a la derecha */}
          <Nav className="ms-auto">
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}