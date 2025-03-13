import "../estilos/header.css"
import logo from "../assets/logo.png"
import userlogo from "../assets/userlogo.png"
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header class="header">
            <div class="container-pages">
                <Link to="/" className="container-img">
                    <img src={logo} alt="logo" class="logo" />
                </Link>
                <Link to="/conocenos" className="header-titulos">
                    <p>CONÓCENOS</p>
                </Link>
                <Link to="/rutas" className="header-titulos">
                    <p>RUTAS</p>
                </Link>
            </div>
            <div class="container-user">
                <Link to="/login" className="container-user">
                    <img src={userlogo} alt="usuario" class="user-logo" />
                    <p>Iniciar Sesión</p>
                </Link>
                
            </div>
        </header>
    )
}