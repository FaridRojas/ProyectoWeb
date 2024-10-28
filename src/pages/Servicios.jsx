import { useState } from 'react';
import { Row, Col, Collapse, Button, Alert } from 'react-bootstrap';
import '../styles/Servicios.css'; // esto deveria tener un espacio xd

function Servicios() {
  const [openIndex, setOpenIndex] = useState(null);

  const servicios = [{titulo: 'Cambio de Aceite y Filtros',descripcion: `El cambio de aceite ayuda a que las piezas del motor funcionen sin fricciones. Utilizamos aceites sintéticos y semi-sintéticos para garantizar el mejor rendimiento y alargar la vida útil del motor. Con cada cambio, revisamos también los filtros, eliminando impurezas que puedan afectar el sistema.`,alerta: 'Recuerde: El aceite sucio es el enemigo número uno del motor.',},{titulo: 'Revisión y Cambio de Frenos',descripcion: `La seguridad al volante depende de un buen sistema de frenos. Revisamos pastillas, discos y tambores, y ajustamos el ABS si su carro lo tiene. Trabajamos con repuestos originales para garantizar una frenada perfecta en cada situación.`,alerta: 'Tip: Si escucha chillidos al frenar, probablemente es hora de un cambio de pastillas.',},{titulo: 'Diagnóstico Computarizado',descripcion: `Un diagnóstico a tiempo ahorra dolores de cabeza. Con nuestros escáneres de última tecnología detectamos fallas sin necesidad de desarmar el motor. Esta revisión cubre todos los sensores y sistemas electrónicos del vehículo.`,alerta: 'Dato: Un testigo encendido en el tablero es señal de que debe traer su carro al taller.',},{titulo: 'Mantenimiento del Aire Acondicionado',descripcion: `El clima puede ser impredecible, pero su aire acondicionado no debería serlo. Revisamos el nivel de gas refrigerante, limpiamos filtros y verificamos que el compresor funcione sin problemas. También aplicamos tratamientos antibacterianos para mantener el aire limpio.`,alerta: 'Nota: Un buen mantenimiento evita malos olores en el aire acondicionado.',},{titulo: 'Alineación y Balanceo',descripcion: `Una alineación precisa mejora la estabilidad del vehículo y evita el desgaste desigual de las llantas. Realizamos ajustes en los ángulos de las ruedas y balanceamos cada llanta para garantizar una conducción suave.`,alerta: 'Recomendación: Alinee su vehículo al menos dos veces al año para evitar desgastes innecesarios.',},{titulo: 'Chequeo de Baterías y Sistema Eléctrico',descripcion: `Con Gabriel nos encargamos de revisar que su batería, alternador y fusibles estén en buen estado. También realizamos pruebas de carga para asegurar que todo funcione correctamente y evitar sorpresas desagradables en la carretera.`,alerta: 'Atención: Una batería en mal estado puede dejarlo varado en el momento menos esperado.',},];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="video-background-container">
      <video autoPlay muted loop className="video-background">
        <source src="/images/videomaz.mp4" type="video/mp4" />
        su navegador no soporta videos. jaja.
      </video>
      <div className="servicio-container">
        <h3 className="servicio-titulo">Nuestros Servicios</h3>
        <Row xs={1} md={2} className="g-4">
          {servicios.map((servicio, index) => (
            <Col key={index}>
              <div className={`servicio-card ${openIndex === index ? 'expandido' : ''}`}>
                <div className="servicio-header">
                  <div className="servicio-titulo-text">{servicio.titulo}</div>
                  <span className="badge-nuevo">¡Nuevo!</span>
                  <Button
                    className="servicio-boton"
                    onClick={() => handleToggle(index)}
                    aria-controls={`collapse-${index}`}
                    aria-expanded={openIndex === index}
                  >
                    {openIndex === index ? 'Cerrar' : 'Abrir'}
                  </Button>
                </div>
                <Collapse in={openIndex === index}>
                  <div id={`collapse-${index}`} className="servicio-body">
                    <p className="servicio-texto">{servicio.descripcion}</p>
                    <Alert className="servicio-alerta">{servicio.alerta}</Alert>
                  </div>
                </Collapse>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Servicios;
