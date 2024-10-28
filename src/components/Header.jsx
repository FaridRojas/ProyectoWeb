import { Navbar, Nav, OverlayTrigger, Popover, Collapse, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Header.css'; // Importación de los estilos para el header

const popover = ( //Popover que se muestra en el info del header para mostrar los horarios disponibles
  <Popover id="popover-basic">
    <Popover.Header as="h3">Horarios de atención presencial</Popover.Header>{/*Header del popover*/}
    <Popover.Body >{/*Contenido del popover*/}
       <strong>Lunes a Viernes:</strong> 8 a.m. a 12 p.m. - 2 p.m. a 5 p.m. <br /> 
       <strong>Sábados:</strong> 9 a.m. a 1 p.m. <br />
       <strong>Domingos y Festivos:</strong> No hay servicio presencial <br />
    </Popover.Body>
    <Popover.Header as="h3">Horarios de atención virtual</Popover.Header>{/*Segundo Header del popover*/}
    <Popover.Body >{/*Contenido del popover*/}
       <strong>Lunes a Domingo:</strong> 8 a.m. a 5 p.m. (Solo clientes registrados con servicios activos o agendar citas)<br /> 
    </Popover.Body>
  </Popover>
);

// Definimos el componente Header
function Header() { 
  // Declaramos los estados locales open e isLoggedIn para mantener actualizada la información de loggeo 
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  // Hook de navegación para redirigir a diferentes rutas
  const navigate = useNavigate(); 

  // useEffect para manejar cambios en el almacenamiento local
  useEffect(() => {    
    const handleStorageChange = () => {
      // Obtenemos el estado de "loggedIn" 
      const loggedIn = localStorage.getItem('loggedIn');
      // Actualizamos el estado de isLoggedIn basado en el valor de "loggedIn"
      setIsLoggedIn(!!loggedIn);
    };

    // Añadimos el event listener para cambios en el almacenamiento
    window.addEventListener('storage', handleStorageChange);
    
    // Ejecutamos handleStorageChange al montar el componente
    handleStorageChange();
    
    // Limpiamos el event listener al desmontar el componente
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);//Cambio de inicio de sesión a falso para cerrar sesión
    navigate('/');
  };

  // Función para navegar al Dashboard
  const handleDashboard = () => {
    navigate('/dashboard');
  };

  // Función para navegar a la sección de contenido de usuario
  const handleUserContent = () => {
    navigate('/user-content');
  };

  return (
    <Navbar className="custom-navbar" expand="lg" fixed="top">
      {/* Enlace a la página principal */}
      <Navbar.Brand as={Link} to="/" className="brand-hover">
        RUITOQUE CAR CENTER
      </Navbar.Brand>
      {/* Botón para mostrar/ocultar el menú */}
      <button
        className="btn-toggle-menu"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-menu"
        aria-expanded={open}
      >
        Menú
      </button>
      {/* Menú colapsable */}
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
          {/* Condicionales para mostrar las opciones de Login y Logout, en caso de estar loggeado mostrar las opciones adicionales */}
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
      {/* Botón de información con popover */}
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button variant="info" className="btn-info-hover">Info</Button>
      </OverlayTrigger>
    </Navbar>
  );
}

export default Header;