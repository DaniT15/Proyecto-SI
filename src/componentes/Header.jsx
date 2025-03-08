import "../estilos/header.css"
import logo from "../assets/logo.png"
import userlogo from "../assets/userlogo.png"



export default function Header() {
    return (
        <header class="header">
            <div class="container-logo">
                <div class="container-img">
                    <img src={logo} alt="logo" class="logo" />
                </div>
                <p>CONÓCENOS</p>
            </div>
            <div class="container-user">
                <img src={userlogo} alt="usuario" class="user-logo" />
                <p>Iniciar Sesión</p>
            </div>
        </header>
    )
}