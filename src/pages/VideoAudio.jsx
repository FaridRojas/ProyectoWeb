import { Container } from 'react-bootstrap';

function VideoAudio() {
  return (
    <>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          zIndex: -1 
        }}
      >
        <source src={`${process.env.PUBLIC_URL}/images/videomaz.mp4`} type="video/mp4" />
        tu navegador no soporta videos html5
      </video>

      <Container className="mt-5">
        <h2>El legado del taller autorizado</h2>
        <div className="ratio ratio-16x9">
          <iframe 
            src="https://www.youtube.com/embed/eAuXTYSuRm8" 
            title="Video informativo del taller"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="mt-4">Audio de Bienvenida</h2>
        <audio controls>
          <source src="/audio/audio.mp3" type="audio/mp3" />
          su navegador no soporta audio html5
        </audio>
      </Container>
    </>
  );
}

export default VideoAudio;
