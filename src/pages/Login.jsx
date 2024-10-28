// Importamos las librerías y componentes necesarios desde 'react', 'react-bootstrap' y 'react-router-dom'.
import { useState } from 'react';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Definimos el componente funcional 'Login'.
function Login() {
  // Definimos varios estados locales usando el hook useState.
  const [show, setShow] = useState(true); // Estado para controlar la visibilidad del modal.
  const [credentials, setCredentials] = useState({ user: '', password: '' }); // Estado para almacenar las credenciales del usuario.
  const [loading, setLoading] = useState(false); // Estado para controlar si se está cargando algo.
  const [error, setError] = useState(false); // Estado para manejar los errores de inicio de sesión.
  
  // Hook de navegación para redirigir a diferentes rutas.
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión cuando se envía el formulario.
  const handleLogin = (e) => {
    e.preventDefault(); // Previene que el formulario se envíe de manera convencional.
    setLoading(true); // Muestra el spinner de carga.
    setTimeout(() => {
      // Simulación de una llamada a la API con timeout de 1 segundo.
      if (credentials.user === 'admin' && credentials.password === '1234') {
        localStorage.setItem('loggedIn', 'true'); // Guarda el estado de inicio de sesión en localStorage.
        setShow(false); // Oculta el modal.
        window.dispatchEvent(new Event('storage')); // Dispara un evento de almacenamiento para notificar cambios.
        navigate('/'); // Redirige a la página de inicio.
      } else {
        setError(true); // Muestra un mensaje de error si las credenciales son incorrectas.
      }
      setLoading(false); // Oculta el spinner de carga.
    }, 1000);
  };

  // Función para cerrar el modal y redirigir a la página de inicio.
  const handleClose = () => {
    setShow(false);
    navigate('/');
  };

  return (
    <>
      {show && <div className="custom-backdrop"></div>} {/* Fondo personalizado para el modal. */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop={false}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title> {/* Título del modal. */}
        </Modal.Header>
        <Modal.Body className="custom-modal-content">
          {error && <Alert variant="danger">Usuario o contraseña incorrectos</Alert>} {/* Mensaje de error si las credenciales son incorrectas. */}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu usuario"
                onChange={(e) => setCredentials({ ...credentials, user: e.target.value })} // Actualiza el estado de credenciales cuando cambia el valor del campo.
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} // Actualiza el estado de credenciales cuando cambia el valor del campo.
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Iniciar Sesión'} {/* Muestra un spinner de carga si está cargando. */}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

// Exportamos el componente Login para usarlo en otras partes de la aplicación.
export default Login;
