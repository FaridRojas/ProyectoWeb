// src/pages/Login.jsx
import { useState } from 'react';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

function Login() {
  const [show, setShow] = useState(true);
  const [credentials, setCredentials] = useState({ user: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const navigate = useNavigate(); 

  const onCaptchaChange = (value) => {
    setRecaptchaValue(value);
};

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (credentials.user === 'admin' && credentials.password === '1234') {
        localStorage.setItem('loggedIn', 'true'); // Guarda el estado en localStorage
        setShow(false);
        window.dispatchEvent(new Event('storage')); // Dispara el evento para notificar cambios
        navigate('/'); // Redirige al inicio
      } else {
        setError(true);
      }
      setLoading(false);
    }, 1000);
  };

 
  const handleClose = () => {
    setShow(false);
    navigate('/'); 
  };

  return (
    <>
      {show && <div className="custom-backdrop"></div>}
      <Modal
        show={show}
        onHide={handleClose} 
        centered
        backdrop={false}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-content">
          {error && <Alert variant="danger">Usuario o contraseña incorrectos</Alert>}
          <Form onSubmit={handleLogin}>
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
            <ReCAPTCHA sitekey="6LebEm4qAAAAAFCai6COWZRGeAx4o5kfESqYcT5O" onChange={onCaptchaChange} className="mb-3" />
            <Button variant="primary" type="submit" className="w-100" disabled={loading || !recaptchaValue}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Iniciar Sesión'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
