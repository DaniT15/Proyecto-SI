import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './paginas/LandingPage';
import Conocenos from './paginas/Conocenos';
import Header from './componentes/Header';
import Footer from './componentes/Footer'
import Login from './paginas/Login'; 
import Registrarse from './paginas/Registrarse'
import Rutas from './paginas/Rutas'
import EditarPerfil from './paginas/EditarPerfil';
import VerPerfil from './paginas/VerPerfil';
import Galeria from './paginas/Galeria';
import MenuAdmin from './paginas/MenuAdmin';
import RegistrarGuia from './paginas/RegistrarGuia';
import CalendarioActividades from './paginas/CalendarioActividades';
import EditarRuta from './paginas/EditarActividad';
import EditarActividad from './paginas/EditarActividad';
import CrearActividad from './paginas/CrearActividad';
import RegistrarRuta from './paginas/RegistrarRuta';
import Reservar from './paginas/Reservar';

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
          <Route path="/verPerfil" element={<VerPerfil />} />
          <Route path="/editarPerfil" element={<EditarPerfil />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/menuAdmin" element={<MenuAdmin />} />
          <Route path="/registrarGuia" element={<RegistrarGuia />} />
          <Route path="/calendarioActividades" element={<CalendarioActividades />} />
          <Route path="/editarRuta" element={<EditarActividad />} />
          <Route path="/crearActividad" element={<CrearActividad />} />
          <Route path="/registrarRuta" element={<RegistrarRuta />} />
          <Route path="/reservar" element={<Reservar />} />
        </Routes>
      <Footer />
    </Router>
  );
}