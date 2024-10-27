// src/pages/Home.jsx
import { Carousel, Container, Row, Col, Accordion } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid className="mt-5">
      {/* Carrusel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x300"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Bienvenido al Taller Mecánico</h3>
            <p>Servicio y calidad garantizados.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x300"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Mantenimiento Preventivo</h3>
            <p>Tu seguridad es nuestra prioridad.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Diseño a tres columnas */}
      <Row className="mt-4">
        <Col xs={12} md={4}>
          <h3>Columna 1</h3>
          <p className="stylized-text">
            Contenido de la primera columna, comenzando con una letra estilizada.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <h3>Columna 2</h3>
          <p>Contenido de la segunda columna</p>
        </Col>
        <Col xs={12} md={4}>
          <h3>Columna 3</h3>
          <p>Contenido de la tercera columna</p>
        </Col>
      </Row>

      {/* Acordeón */}
      <Accordion defaultActiveKey="0" className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Preguntas Frecuentes</Accordion.Header>
          <Accordion.Body>Contenido de la pregunta frecuente 1.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Horarios</Accordion.Header>
          <Accordion.Body>Contenido de los horarios.</Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Video y Audio */}
      <div className="mt-4">
        <h2>Video Informativo</h2>
        <video width="320" height="240" controls>
          <source src="video.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        <h2 className="mt-4">Audio de Bienvenida</h2>
        <audio controls>
          <source src="audio.mp3" type="audio/mp3" />
          Tu navegador no soporta audio HTML5.
        </audio>
      </div>
    </Container>
  );
}

export default Home;
