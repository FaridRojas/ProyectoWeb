import { Navbar, Nav, OverlayTrigger, Popover, Collapse, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Header.css'; // Importar CSS personalizado

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
      setIsLoggedIn(!!loggedIn);
    };

    window.addEventListener('storage', handleStorageChange);
    handleStorageChange();

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
    navigate('/user-content');
  };

  return (
    <Navbar className="custom-navbar" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/" className="brand-hover">
        RUITOQUE CAR CENTER
      </Navbar.Brand>
      <button
        className="btn-toggle-menu"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-menu"
        aria-expanded={open}
      >
        Menú
      </button>

      <Collapse in={open} className="collapse-menu">
        <Nav className="menu-options">
          <Nav.Link as={Link} to="/" className="menu-item-hover">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/servicios" className="menu-item-hover">Servicios</Nav.Link>
          <Nav.Link as={Link} to="/promociones" className="menu-item-hover">Promociones</Nav.Link>
          <Nav.Link as={Link} to="/preguntas-frecuentes" className="menu-item-hover">
            Preguntas Frecuentes
          </Nav.Link>
          <Nav.Link as={Link} to="/horarios" className="menu-item-hover">Horarios</Nav.Link>
          <Nav.Link as={Link} to="/video-audio" className="menu-item-hover">Video y Audio</Nav.Link>

          {!isLoggedIn && (
            <Nav.Link as={Link} to="/login" className="menu-item-hover">Login</Nav.Link>
          )}
          {isLoggedIn && (
            <>
              <Nav.Link onClick={handleDashboard} className="menu-item-hover">
                Dashboard
              </Nav.Link>
              <Nav.Link onClick={handleUserContent} className="menu-item-hover">
                Mi Contenido
              </Nav.Link>
              <Nav.Link onClick={handleLogout} className="menu-item-hover">
                Cerrar Sesión
              </Nav.Link>
            </>
          )}
        </Nav>
      </Collapse>

      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button variant="info" className="btn-info-hover">Info</Button>
      </OverlayTrigger>
    </Navbar>
  );
}

export default Header;
