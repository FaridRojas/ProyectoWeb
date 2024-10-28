//Implementación del footer
function Footer() {
    const miembros = [
      { nom: 'Farid Rojas', nombre: 'Farid Camilo Rojas Vargas', codigo: '2220051', correo: 'juan.perez@example.com' },
      { nom: 'César Vanegas', nombre: 'César Vanegas Oviedo', codigo: '2220040', correo: 'cesarvanegasoviedo40@gmail.com' },
      { nom: 'Gabriel Castillo', nombre: 'Gabriel David Castillo Rodriguez', codigo: '22220055', correo: 'gabrieldcastillor@gmail.com' },
      { nom: 'Alejandro Velandia', nombre: 'Alejandro Velandia Gelvez', codigo: '2221552', correo: 'alejandrovelandiagelvez@gmail.com' },
    ];
  
    const mostrarInfo = (miembro) => {
      alert(`Nombre: ${miembro.nombre}\nCódigo: ${miembro.codigo}\nCorreo: ${miembro.correo}`);//Alerta en el navegador que enseña la información de cada integrante
    };
  
    return (
      //Código en JSX para implementar los enlaces de redes sociales
      <footer className="text-center py-4">
        <p>Nuestras redes sociales:</p>
        <a href="https://facebook.com">Facebook</a> | 
        <a href="https://twitter.com">Twitter</a> | 
        <a href="https://instagram.com">Instagram</a> | 
        <a href="https://linkedin.com">LinkedIn</a>
  
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
  
  