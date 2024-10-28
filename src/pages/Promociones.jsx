// src/pages/Promociones.jsx
import { useState, useEffect } from 'react';
import { Carousel, Container, Button, Modal } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Promociones.css';

const promociones = [
  {
    titulo: '10% de descuento en cambio de aceite',
    descripcion: 'Vení y aprovechá nuestro 10% de descuento en el cambio de aceite, válido hasta fin de mes.',
    tiempoRestante: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 días
    imagen: '/images/aceite.webp',
  },
  {
    titulo: 'Chequeo de frenos gratis',
    descripcion: 'Con cualquier otro servicio, te regalamos el chequeo completo de frenos. ¿Vas a subir a Ruitoque?',
    tiempoRestante: Date.now() + 5 * 24 * 60 * 60 * 1000, // 5 días
    imagen: '/images/frenos.webp',
  },
  {
    titulo: '50% en diagnóstico eléctrico',
    descripcion: 'Llevate un 50% de descuento en el diagnóstico eléctrico. Ideal si te quedaste sin luces en la trocha.',
    tiempoRestante: Date.now() + 3 * 24 * 60 * 60 * 1000, // 3 días
    imagen: '/images/diagnostico.webp',
  },
];

const Promociones = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
  const navigate = useNavigate(); // Hook para navegación

  useEffect(() => {
    toast.info('¡Nueva promoción disponible!', {
      position: 'top-right',
      autoClose: 5000,
    });
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
  });

  const handleSwipe = (direction) => {
    if (direction === 'LEFT') {
      setActiveIndex((prevIndex) => (prevIndex + 1) % promociones.length);
    } else if (direction === 'RIGHT') {
      setActiveIndex((prevIndex) => (prevIndex - 1 + promociones.length) % promociones.length);
    }
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const goToHorarios = () => navigate('/horarios'); // Navegar a Horarios

  return (
    <Container fluid className="promociones-container" {...handlers}>
      <Carousel
        activeIndex={activeIndex}
        onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
        indicators={false}
        interval={null}
      >
        {promociones.map((promo, index) => (
          <Carousel.Item key={index} className="promocion-slide">
            {promo.video ? (
              <video autoPlay loop muted className="d-block w-100">
                <source src={promo.video} type="video/webp" />
              </video>
            ) : (
              <img className="d-block w-100" src={promo.imagen} alt={promo.titulo} />
            )}
            <Carousel.Caption>
              <h3>{promo.titulo}</h3>
              <p>{promo.descripcion}</p>
              <Countdown
                date={promo.tiempoRestante}
                renderer={({ days, hours, minutes, seconds }) => (
                  <span>
                    Tiempo restante: {days}d {hours}h {minutes}m {seconds}s
                  </span>
                )}
              />
              <Button variant="warning" className="mt-3" onClick={handleModalOpen}>
                Aprovechar Promoción
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡No dejes pasar esta promoción!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Querés saber nuestros horarios disponibles para aprovechar esta oferta?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={goToHorarios}>
            Ver Horarios
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </Container>
  );
};

export default Promociones;
