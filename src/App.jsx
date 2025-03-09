import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './paginas/LandingPage';
import Conocenos from './paginas/Conocenos';
import Header from './componentes/Header';
import Footer from './componentes/Footer'
import Login from "./paginas/Login"; 

export default function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
      <Footer />
    </Router>
  );
}