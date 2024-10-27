// src/components/Header.jsx
import { Navbar, Nav, OverlayTrigger, Popover, Collapse } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Taller Mecánico</Popover.Header>
    <Popover.Body>Ofrecemos los mejores servicios de mantenimiento.</Popover.Body>
  </Popover>
);

function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    setIsLoggedIn(!!loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="/">Taller Mecánico</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          {!isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
          {isLoggedIn && <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>}
        </Nav>
      </Navbar.Collapse>

      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <button className="btn btn-info mx-2">Info</button>
      </OverlayTrigger>

      <button
        className="btn btn-warning"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-content"
        aria-expanded={open}
      >
        Menú Colapsable
      </button>

      <Collapse in={open}>
        <div id="collapse-content" className="mt-2">
          <p>Contenido del menú colapsable.</p>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Header;
