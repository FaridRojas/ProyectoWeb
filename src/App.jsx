// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import UserContent from './pages/UserContent.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Servicios from './pages/Servicios';
import Promociones from './pages/Promociones';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import Horarios from './pages/Horarios';
import VideoAudio from './pages/VideoAudio';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-content" element={<UserContent />} />
          <Route path="/servicios" element={<Servicios />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/video-audio" element={<VideoAudio />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
