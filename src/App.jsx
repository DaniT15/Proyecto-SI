import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './paginas/LandingPage';
import Conocenos from './paginas/Conocenos';
import Header from './componentes/Header';
import Footer from './componentes/Footer'
import Login from './paginas/Login'; 
import Registrarse from './paginas/Registrarse'
import Rutas from './paginas/Rutas'
import Perfil from './paginas/Perfil';

export default function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} /> 
          <Route path="/rutas" element={<Rutas />} /> 
          <Route path="/perfil" element={<Perfil />} /> 
        </Routes>
      <Footer />
    </Router>
  );
}