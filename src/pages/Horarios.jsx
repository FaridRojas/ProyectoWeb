// src/pages/Horarios.jsx
import React, { useState } from 'react';
import { Container, Table, Button, Tooltip, OverlayTrigger, Modal, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css/animate.min.css';
import '../styles/Horarios.css';

const horariosIniciales = [
  { dia: 'Lunes', hora: '8:00 AM - 12:00 PM', disponible: true },
  { dia: 'Lunes', hora: '2:00 PM - 6:00 PM', disponible: false },
  { dia: 'Martes', hora: '8:00 AM - 12:00 PM', disponible: true },
  { dia: 'Martes', hora: '2:00 PM - 6:00 PM', disponible: true },
  { dia: 'Miércoles', hora: '8:00 AM - 12:00 PM', disponible: false },
  { dia: 'Jueves', hora: '2:00 PM - 6:00 PM', disponible: true },
];

const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const Horarios = () => {
  const [horarios, setHorarios] = useState(horariosIniciales);
  const [fecha, setFecha] = useState(null);
  const [filtroDia, setFiltroDia] = useState('Todos');
  const [showModal, setShowModal] = useState(false);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  const handleFiltroDia = (e) => setFiltroDia(e.target.value);

  const handleReserva = (horario) => {
    setHorarioSeleccionado(horario);
    setShowModal(true);
  };

  const confirmarReserva = () => {
    toast.success('¡Reserva confirmada!', {
      position: 'bottom-center',
      autoClose: 3000,
    });
    setShowModal(false);
  };

  const confirmarFecha = () => {
    if (!fecha) {
      toast.error('Seleccione una fecha antes de confirmar.', {
        position: 'bottom-center',
        autoClose: 3000,
      });
    } else {
      const diaSeleccionado = diasSemana[fecha.getDay()];
      setFiltroDia(diaSeleccionado); // Actualiza el filtro según la fecha seleccionada
      toast.success(`Fecha seleccionada: ${fecha.toLocaleDateString()}`, {
        position: 'bottom-center',
        autoClose: 3000,
      });
    }
  };

  const renderTooltip = (props, disponible) => (
    <Tooltip {...props}>
      {disponible ? 'Disponible para reserva' : 'No disponible'}
    </Tooltip>
  );

  const horariosFiltrados =
    filtroDia === 'Todos'
      ? horarios
      : horarios.filter((horario) => horario.dia === filtroDia);

  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video-background">
        <source src="/images/videomaz.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>

      <div className="content-container">
        <Container className="mt-5 animate__animated animate__fadeIn">
          <h3 className="mb-4">Horarios Disponibles</h3>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Form.Select value={filtroDia} onChange={handleFiltroDia} className="w-25">
              <option value="Todos">Todos los Días</option>
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miércoles">Miércoles</option>
              <option value="Jueves">Jueves</option>
            </Form.Select>

            <div className="d-flex gap-2 align-items-center">
              <DatePicker
                selected={fecha}
                onChange={(date) => setFecha(date)}
                className="form-control"
                placeholderText="Seleccionar Fecha"
                dateFormat="dd/MM/yyyy"
                isClearable
              />
              <Button variant="success" onClick={confirmarFecha}>
                Confirmar Fecha
              </Button>
            </div>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Día</th>
                <th>Hora</th>
                <th>Disponibilidad</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {horariosFiltrados.length > 0 ? (
                horariosFiltrados.map((horario, index) => (
                  <tr key={index}>
                    <td>{horario.dia}</td>
                    <td>{horario.hora}</td>
                    <td>
                      <OverlayTrigger
                        placement="top"
                        overlay={(props) => renderTooltip(props, horario.disponible)}
                      >
                        <span>{horario.disponible ? 'Disponible' : 'No disponible'}</span>
                      </OverlayTrigger>
                    </td>
                    <td>
                      {horario.disponible && (
                        <Button variant="primary" onClick={() => handleReserva(horario)}>
                          Reservar
                        </Button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No hay horarios disponibles para esta fecha.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar Reserva</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                ¿Desea confirmar su reserva para el día{' '}
                <strong>{horarioSeleccionado?.dia}</strong> a las{' '}
                <strong>{horarioSeleccionado?.hora}</strong>?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancelar
              </Button>
              <Button variant="success" onClick={confirmarReserva}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>

          <ToastContainer position="bottom-center" autoClose={3000} />
        </Container>
      </div>
    </div>
  );
};

export default Horarios;
