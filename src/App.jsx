// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PrivateRoute from './PrivateRoute.jsx'; // Nueva importación

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
