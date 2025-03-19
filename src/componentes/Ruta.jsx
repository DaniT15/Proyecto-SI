import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import "../estilos/ruta.css" 

export default function Ruta({ rutaId }) {
    const [rutaData, setRutaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerRuta = async () => {
            try {
                setLoading(true);
                const rutaRef = doc(db, 'rutas', rutaId); 
                const rutaSnap = await getDoc(rutaRef);

                if (rutaSnap.exists()) {
                    setRutaData(rutaSnap.data());
                } else {
                    setError('Ruta no encontrada');
                }
            } catch (err) {
                setError('Error al obtener la ruta');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        obtenerRuta();
    }, [rutaId]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!rutaData) {
        return <p>No se encontraron datos de la ruta.</p>;
    }


    return (
        <div className="ruta">
            <img src={rutaData.imagen} alt={rutaData.nombre} className="ruta-imagen" />
            <div className="ruta-info">
                <h3>{rutaData.nombre}</h3>
                <p>Dificultad: {rutaData.dificultad}</p>
                <p>Distancia: {rutaData.distancia}km</p>
                <p>Tiempo estimado: {rutaData.tiempo}</p>
                <p>Descripción: {rutaData.descripcion}</p>
            </div>
        </div>
    )
}


