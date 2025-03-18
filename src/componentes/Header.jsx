import "../estilos/header.css"
import logo from "../assets/logo.png"
import userlogo from "../assets/userlogo.png"
import { Link } from 'react-router-dom';
import { UserContext } from "../contextos/UserContext";
import { useContext } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { app } from "../config/firebaseConfig";

const auth = getAuth(app)


export default function Header() {
    const contextUser = useContext(UserContext)
    const { user, setUser, profile, logged } = contextUser

    const handleLogout = async () => {
        await signOut(auth)
    }



    return (
        <header className="header">
            <div className="container-pages">
                <Link to="/" className="container-img">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <Link to="/conocenos" className="header-titulos">
                    <p>CONÓCENOS</p>
                </Link>
                <Link to="/rutas" className="header-titulos">
                    <p>RUTAS</p>
                </Link>
            </div>
            <div className="container-user">
                {!logged ?
                    <Link to="/login" className="container-user">
                        <img src={userlogo} alt="usuario" className="user-logo" />
                        <p>Iniciar Sesión</p>
                    </Link> :
                    <div className="container-user-registered">
                        <Link to="/verPerfil" className="container-user">
                            <img src={userlogo} alt="usuario" className="user-logo" />
                            <p>Ver Perfil: {profile.name}</p>
                        </Link>
                    </div>


                }

            </div>
        </header>
    )
}
