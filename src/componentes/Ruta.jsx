export default function Ruta({ nombre, dificultad, distancia, tiempo, descripcion, imagen }) {
    return (
        <div className="ruta">
            <img src={imagen} alt={nombre} className="ruta-imagen" />
            <div className="ruta-info">
                <h3>{nombre}</h3>
                <p>Dificultad: {dificultad}</p>
                <p>Distancia: {distancia}km</p>
                <p>Tiempo estimado: {tiempo}</p>
                <p>Descripción: {descripcion}</p>
            </div>
        </div>
    )
}
