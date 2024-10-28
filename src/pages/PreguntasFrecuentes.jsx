// src/pages/PreguntasFrecuentes.jsx
// video de fonod no afecta contenidos de la pagina
import React, { useState } from 'react';
import '../styles/PreguntasFrecuentes.css';

const preguntasIniciales = [
  { pregunta: '¿Qué incluye el mantenimiento básico?', respuesta: 'Cambio de aceite, revisión de filtros, escaneo computarizado y ajuste de frenos.' },
  { pregunta: '¿Cada cuánto debo hacer la alineación?', respuesta: 'Es recomendable hacerla cada 10,000 km o después de recorrer caminos destapados, como los de la trocha hacia Lebrija.' },
  { pregunta: '¿El diagnóstico es gratuito?', respuesta: 'Sí, en promociones especiales ofrecemos diagnóstico gratuito. Consulte los sábados disponibles.' },
  { pregunta: '¿Cuánto tarda un cambio de aceite?', respuesta: 'El cambio de aceite demora aproximadamente 30 minutos, dependiendo del tipo de vehículo.' },
  { pregunta: '¿Qué tipos de baterías manejan?', respuesta: 'Tenemos baterías de diferentes marcas y capacidad, ideales para trayectos largos o rutas hacia Girón y Piedecuesta.' },
  
];

const PreguntasFrecuentes = () => {
  const [preguntas, setPreguntas] = useState(preguntasIniciales);
  const [busqueda, setBusqueda] = useState('');

  const handleBusqueda = (e) => {
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);
    setPreguntas(preguntasIniciales.filter((pregunta) =>
      pregunta.pregunta.toLowerCase().includes(valor)
    ));
  };

  const toggleRespuesta = (index) => {
    const acordeon = document.getElementById(`respuesta-${index}`);
    acordeon.classList.toggle('abierto');
  };

  return (
    <div className="video-container">
      <video autoPlay muted loop className="video-fondo">
        <source src="/images/videomaz.mp4" type="video/mp4" />
      </video>
      <div className="preguntas-container">
        <h1 className="titulo-principal">Preguntas Frecuentes</h1>
        <input
          type="text"
          placeholder="Buscar preguntas..."
          value={busqueda}
          onChange={handleBusqueda}
          className="busqueda-input"
        />
        <div className="acordeon">
          {preguntas.map((item, index) => (
            <div key={index} className="pregunta-item">
              <h3 className="pregunta-titulo" onClick={() => toggleRespuesta(index)}>
                {item.pregunta}
              </h3>
              <div id={`respuesta-${index}`} className="pregunta-respuesta">
                <p>{item.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
