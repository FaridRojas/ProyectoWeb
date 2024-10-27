import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Login() {
  const [show, setShow] = useState(true);
  const [credentials, setCredentials] = useState({ user: '', password: '' });

  const handleLogin = () => {
    if (credentials.user === 'admin' && credentials.password === '1234') {
      localStorage.setItem('loggedIn', 'true');
      setShow(false);
      window.location.href = '/admin';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu usuario"
              onChange={(e) => setCredentials({ ...credentials, user: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
