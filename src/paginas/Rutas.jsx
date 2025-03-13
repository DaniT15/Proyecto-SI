import "../estilos/rutas.css"
import flecha from '../assets/flecha-abajo.png'
import separador from '../assets/separador.png'
import ruta from '../assets/ruta.png'

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
            <div className="nuestras-rutas">
                <div className="bloque-ruta">
                    <img className="img-ruta"src={ruta} alt="" />
                    <div className="rutas-atributos">
                        <h1>Naiguata</h1>
                        <p>Dificultad: Moderada</p>
                        <p>Distancia: 3,9km</p>
                        <p>Tiempo estimado: 1h 55min</p>
                        <p>Descripcion: Es una región muy popular para el senderismo y pasear, por lo que es probable encontrarse con otras personas.</p>
                    </div>
                </div>
            </div>
            <div className="nuestras-rutas">
                <div className="bloque-ruta">
                    <img className="img-ruta"src={ruta} alt="" />
                    <div className="rutas-atributos">
                        <h1>Naiguata</h1>
                        <p>Dificultad: Moderada</p>
                        <p>Distancia: 3,9km</p>
                        <p>Tiempo estimado: 1h 55min</p>
                        <p>Descripcion: Es una región muy popular para el senderismo y pasear, por lo que es probable encontrarse con otras personas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}