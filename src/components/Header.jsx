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
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si está logueado
  const navigate = useNavigate();

  // Verificar si el usuario está logueado al cargar el componente
  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    setIsLoggedIn(!!loggedIn); // Si hay un valor en 'loggedIn', establece el estado en true
  }, []);

  // Función de cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('loggedIn'); // Elimina el estado de sesión del almacenamiento local
    setIsLoggedIn(false); // Actualiza el estado para ocultar el botón de logout
    navigate('/'); // Redirige al usuario a la página de inicio
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="/">Taller Mecánico</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          {!isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>} {/* Mostrar Login solo si no está logueado */}
          {isLoggedIn && <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>} {/* Mostrar Logout solo si está logueado */}
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
