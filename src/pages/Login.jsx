// src/pages/Login.jsx
import { useState } from 'react';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';

function Login() {
  const [show, setShow] = useState(true);
  const [credentials, setCredentials] = useState({ user: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      if (credentials.user === 'admin' && credentials.password === '1234') {
        localStorage.setItem('loggedIn', 'true');
        setShow(false);
        window.location.href = '/admin';
      } else {
        setError(true);
      }
      setLoading(false);
    }, 1000); // Simula un retardo de 1 segundo
  };

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">Usuario o contraseña incorrectos</Alert>}
        <Form>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu usuario"
              onChange={(e) => setCredentials({ ...credentials, user: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleLogin} className="w-100" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Iniciar Sesión'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
