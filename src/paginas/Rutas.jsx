import "../estilos/rutas.css"
import flecha from '../assets/flecha-abajo.png'
import separador from '../assets/separador.png'
import ruta from '../assets/ruta.png'
import Ruta from "../componentes/Ruta"

export default function Rutas() {
    return (
        <div className="rutas-div">
            <div className="titulo-div">
                <h1>Nuestras rutas</h1>
                <div className="filtrar-div">
                    <h2>Filtar por</h2>
                    <img className="separador" src={separador} alt="" />
                    <div className="filtrado">
                        <h2>popularidad</h2>
                        <img className="flecha" src={flecha} alt="" />
                    </div>
                </div>
            </div>
            <Ruta nombre="Sabas Nieves"
                distancia="3,9"
                tiempo="1h 55min"
                dificultad="Media"
                descripcion="Es una región muy popular para el senderismo y pasear, por lo que es probable encontrarse con otras personas."
                imagen={ruta}>
            </Ruta>
            <Ruta nombre="Sabas Nieves"
                distancia="3,9"
                tiempo="1h 55min"
                dificultad="Media"
                descripcion="Es una región muy popular para el senderismo y pasear, por lo que es probable encontrarse con otras personas."
                imagen={ruta}>
            </Ruta>
        </div>
    )
}