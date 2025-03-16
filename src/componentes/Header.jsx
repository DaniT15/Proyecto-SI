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
                {!logged ?
                    <Link to="/login" className="container-user">
                        <img src={userlogo} alt="usuario" class="user-logo" />
                        <p>Iniciar Sesión</p>
                    </Link> :
                    <div className="container-user-registered">
                        <button onClick={handleLogout}>Log out</button>
                        <Link>
                            <img src={userlogo} alt="usuario" class="user-logo" />
                            <p>Ver Perfil: {profile.name}</p>
                        </Link>
                    </div>


                }

            </div>
        </header>
    )
}