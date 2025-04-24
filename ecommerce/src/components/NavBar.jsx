import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; // 'b' minúscula
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router'; // Asegúrate de importar NavLink
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { getCategories } from '../firebase/db';

export default function AppNavbar() {  // Cambié el nombre para evitar conflicto
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(data => setCategories(data))
  }, []);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to='/' as={NavLink}>E-commerce</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Categorías
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map(cat => (
                <Dropdown.Item to={`/category/${cat}`} key={cat} as={NavLink}>{cat}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <CartWidget />
        </Nav>
      </Container>
    </Navbar>
  );
}