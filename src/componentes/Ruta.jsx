import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export default function Ruta({ rutaId }) {
    const [ruta, setRuta] = useState(null);

    useEffect(() => {
        const obtenerRuta = async () => {
            try {
                const rutaRef = doc(db, 'rutas', rutaId);
                const rutaSnap = await getDoc(rutaRef);

                if (rutaSnap.exists()) {
                    setRuta(rutaSnap.data());
                } else {
                    console.log('No se encontró la ruta');
                }
            } catch (error) {
                console.error('Error al obtener la ruta:', error);
            }
        };

        obtenerRuta();
    }, [rutaId]);


    if (!ruta) {
        return <div>Ruta no encontrada</div>;
    }
    return (
        <div className="ruta">
            <img src={ruta.foto} alt={ruta.nombre} className="ruta-imagen" />
            <div className="ruta-info">
                <h3>{ruta.nombre}</h3>
                <p>Dificultad: {ruta.dificultad}</p>
                <p>Distancia: {ruta.distancia}km</p>
                <p>Tiempo estimado: {ruta.tiempo} min</p>
                <p>Descripción: {ruta.descripcion}</p>
            </div>
        </div>
    )
}
