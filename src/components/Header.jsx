// src/components/Header.jsx
import { Navbar, Nav, OverlayTrigger, Popover, Collapse } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Horarios de atención presencial</Popover.Header>
    <Popover.Body >
       <strong>Lunes a Viernes:</strong> 8 a.m. a 12 p.m. - 2 p.m. a 5 p.m. <br /> 
       <strong>Sábados:</strong> 9 a.m. a 1 p.m. <br />
       <strong>Domingos y Festivos:</strong> No hay servicio presencial <br />
    </Popover.Body>
    <Popover.Header as="h3">Horarios de atención virtual</Popover.Header>
    <Popover.Body >
       <strong>Lunes a Domingo:</strong> 8 a.m. a 5 p.m. (Solo clientes registrados con servicios activos o agendar citas)<br /> 
    </Popover.Body>
  </Popover>
);

function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      const loggedIn = localStorage.getItem('loggedIn');
      setIsLoggedIn(!!loggedIn); // Verifica si el usuario está logueado
    };

    // Escucha cambios en localStorage para actualizar el estado
    window.addEventListener('storage', handleStorageChange);
    handleStorageChange(); // Verifica el estado al cargar

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  const handleUserContent = () => {
    navigate('/user-content'); // Navega a la página de contenido del usuario
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="/">Taller Mecánico</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          {!isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
          {isLoggedIn && (
            <>
              <Nav.Link onClick={handleDashboard}>Dashboard</Nav.Link>
              <Nav.Link onClick={handleUserContent}>Mi Contenido</Nav.Link> {/* Nueva opción */}
              <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>

      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <button className="btn btn-info mx-2">Horarios de Atención</button>
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
