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
            src="https://www.autoavance.co/wp-content/uploads/2021/10/taller-mecanico-productividad.jpeg"
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
            src="https://gemicar.net/wp-content/uploads/2022/06/como-distribuir-un-taller-mecanico.jpg"
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
          <h3>Misión</h3>
          <p className="stylized-text">
          En Ruitoque Car Center, nuestra misión es brindar servicios automotrices de alta calidad, garantizando la seguridad y satisfacción de nuestros clientes mediante un trabajo profesional, eficiente y honesto. Nos esforzamos por mantener los más altos estándares en reparaciones, mantenimiento y servicio preventivo, utilizando tecnología avanzada y personal altamente calificado para asegurar que cada vehículo reciba el mejor cuidado posible.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <h3>Visión </h3>
          <p className="stylized-text">
          Nuestra visión en Ruitoque Car Center es consolidarnos como el taller mecánico de referencia en la región, reconocido por nuestra ética, experiencia y compromiso con la excelencia. Nos proyectamos como líderes en innovación en el servicio automotriz, adoptando constantemente nuevas tecnologías y prácticas sostenibles que beneficien a nuestros clientes y al medio ambiente.</p>
        </Col>
        <Col xs={12} md={4}>
          <h3>Trayectoria </h3>
          <p className="stylized-text">
          Desde nuestra fundación, Ruitoque Car Center ha sido un pilar de confianza en la comunidad, ofreciendo soluciones automotrices que combinan experiencia, precisión y un servicio al cliente inigualable. A lo largo de los años, hemos crecido y evolucionado, actualizando nuestras técnicas y equipo, siempre fieles a nuestro compromiso de brindar servicios seguros y de alta calidad. Gracias al apoyo de nuestros clientes y a la dedicación de nuestro equipo, hoy nos enorgullece ser uno de los talleres más confiables y recomendados de la región.</p>
        </Col>
      </Row>

        {/* Acordeón */}
        <h5>Nuestros puntos de atención</h5>
        <Accordion defaultActiveKey="0" className="mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Bucaramanga</Accordion.Header>
            <Accordion.Body as={'ul'}>
            <span style={{ margin: '2px 0' }}><li>Calle 35 # 10-43</li></span>
            <span style={{ margin: '2px 0' }}><li>Carrera 11 # 34-52</li></span>
            <span style={{ margin: '2px 0' }}><li>Calle 89 Transversal Oriental Metropolitana – 69</li></span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Floridablanca</Accordion.Header>
            <Accordion.Body as={'ul'}>
              <span style={{ margin: '2px 0' }}><li>Calle 5 N° 8 - 25 Casco Antiguo</li></span>
              <span style={{ margin: '2px 0' }}><li>Avenida 60 N° 42 - 63 Barrio el Carmen</li></span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Piedecuesta</Accordion.Header>
            <Accordion.Body as={'ul'}>
            <span style={{ margin: '2px 0' }}><li>Calle 36 # 50-12</li></span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


      {/* Video y Audio */}
      <div className="mt-4" >
        <h2 style={{textAlign: 'center'}}>Video Informativo</h2>
        <video width="100%" height="480" controls>
          <source src="https://raw.githubusercontent.com/FaridRojas/ProyectoWeb/master/public/images/videomaz.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        <h2 className="mt-4" style={{textAlign: 'center'}}>Audio de Bienvenida</h2>
        <audio style={{ justifyContent: "center" }} controls>
          <source src="https://raw.githubusercontent.com/FaridRojas/ProyectoWeb/master/public/audio/audio.mp3" type="audio/mp3" />
          Tu navegador no soporta audio HTML5.
        </audio>
      </div>
    </Container>
  );
}

export default Home;
