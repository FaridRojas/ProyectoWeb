// src/pages/Home.jsx
import { Carousel, Container, Row, Col, Accordion } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid className="mt-5">
      {/* Carrusel */}
      <Carousel>
        <Carousel.Item style={{ height: '520px', width: '100%' }}>
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
        <Carousel.Item style={{ height: '520px', width: '100%' }}>
          <img
            className="d-block w-100"
            src="https://blog.mecanica.mx/_next/image?url=https%3A%2F%2Fstrapi-mmx.s3.us-east-2.amazonaws.com%2FBlog_5_dfce12da20.png&w=3840&q=100"
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
      <h4>Preguntas Frecuentes (FAQ)</h4>
      <Accordion defaultActiveKey="0" className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header><h5>¿Cuándo debo llevar mi vehículo al taller mecánico automotriz?</h5></Accordion.Header>
          <Accordion.Body> Es recomendable llevar tu vehículo al taller mecánico automotriz para el mantenimiento preventivo cada 6 meses o según las indicaciones del fabricante. También debes acudir al taller si notas cualquier problema o ruido extraño en tu automóvil.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><h5>¿Qué servicios ofrecen?</h5></Accordion.Header>
          <Accordion.Body> Desde un cambio de aceite hasta la reparación de tu motor, en pocas palabras, todo para tu vehículo. 
          <h6><strong>Servicios ofrecidos: </strong></h6>
          <ul>
            <li>Alineación, balanceo y rotación</li>
            <li>Cambio de aceite</li>
            <li>Diagnósticos de fallas específicas</li>
            <li>Mantenimiento al motor, suspensión, sistema de frenos, sistema eléctrico, sistema de dirección</li>
            <li>Mantenimiento al aire acondicionado, correa de repartición, embrague y sincronización</li>
            <li>Mantenimiento por kilometraje</li>
            <li>Revisiones</li>
            <li>Entre otros</li>
          </ul>
           </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><h5>¿Puedo quedarme a verificar los trabajos hechos a mi vehículo?</h5></Accordion.Header>
          <Accordion.Body> Claro que, si está en todo su derecho, Somos transparentes en lo que hacemos y entendemos que muchas veces hay desconfianza por malas experiencias que hayas tenido en otros talleres.
          No tenemos problema en que verifiques o supervises los trabajos que hacemos a tu vehículo, solo ten presente que manejamos una programación y muchas veces por carga de trabajo no podemos intervenirlo desde el momento en que ingresa.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><h5>¿Cuándo debo llevar mi vehículo al taller mecánico automotriz?</h5></Accordion.Header>
          <Accordion.Body> Es recomendable llevar tu vehículo al taller mecánico automotriz para el mantenimiento preventivo cada 6 meses o según las indicaciones del fabricante. También debes acudir al taller si notas cualquier problema o ruido extraño en tu automóvil.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header><h5>¿Puedo esperar en el taller mientras realizan la reparación de mi vehículo?</h5></Accordion.Header>
          <Accordion.Body> Sí, en muchos casos puedes esperar en nuestro taller mientras realizamos la reparación de tu vehículo. Contamos con una cómoda sala de espera donde podrás pasar el tiempo de manera agradable</Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Video y Audio */}
      <div className="mt-4">
        <h2>Video introductorio sobre el Taller</h2>
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/7DsKmMjQwp4" title="Dasercars - Taller mecánico Barcelona" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
