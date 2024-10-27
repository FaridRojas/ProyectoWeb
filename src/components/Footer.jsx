import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    const miembros = [
      { nom: 'Farid Rojas', nombre: 'Farid Camilo Rojas Vargas', codigo: '2220051', correo: 'juan.perez@example.com' },
      { nom: 'César Vanegas', nombre: 'César Vanegas Oviedo', codigo: '2220040', correo: 'cesarvanegasoviedo40@gmail.com' },
      { nom: 'Gabriel Castillo', nombre: 'Gabriel David Castillo Rodriguez', codigo: '22220055', correo: 'gabrieldcastillor@gmail.com' },
      { nom: 'Alejandro Velandia', nombre: 'Alejandro Velandia Gelvez', codigo: '2221552', correo: 'alejandrovelandiagelvez@gmail.com' },
    ];
  
    const mostrarInfo = (miembro) => {
      alert(`Nombre: ${miembro.nombre}\nCódigo: ${miembro.codigo}\nCorreo: ${miembro.correo}`);
    };
  
    return (
      <footer className="text-center py-4">
        
        <p>Síguenos en nuestras redes sociales:</p>
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>  <span style={{ margin: '0 10px' }}>|</span>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter}/></a> <span style={{ margin: '0 10px' }}>|</span>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram}/></a> <span style={{ margin: '0 10px' }}>|</span>
        <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin}/></a> <span style={{ margin: '0 10px' }}>|</span>
  
        <p className="mt-3">Contáctenos:</p>
        {/* Botones para cada miembro del equipo */}
        {miembros.map((miembro, index) => (
          <button
            key={index}
            className="btn btn-info mx-2"
            onClick={() => mostrarInfo(miembro)}
          >
            {miembro.nom}
          </button>
        ))}

        

      </footer>
    );
  }
  
  export default Footer;
  
  