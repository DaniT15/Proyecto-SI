import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useNavigate } from "react-router-dom";

export default function RegistrarRuta() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [dificultad, setDificultad] = useState('');
    const [tiempo, setTiempo] = useState('');
    const [distancia, setDistancia] = useState('');
    const [fotos, setFotos] = useState(''); 
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'rutas'), {
                nombre,
                descripcion,
                dificultad,
                tiempo: parseInt(tiempo),
                distancia: parseFloat(distancia),
                fotos: fotos.split(','),
            });
            setStatus('Ruta registrada con éxito.');
            setNombre('');
            setDescripcion('');
            setDificultad('');
            setTiempo('');
            setDistancia('');
            setFotos('');
        } catch (error) {
            console.error('Error al registrar la ruta:', error);
            setStatus('Error al registrar la ruta.');
        }
    };

    return (
        <div>
            <h2>Registrar Ruta</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <div>
                    <label>Dificultad:</label>
                    <input type="text" value={dificultad} onChange={(e) => setDificultad(e.target.value)} />
                </div>
                <div>
                    <label>Duración (minutos):</label>
                    <input type="number" value={tiempo} onChange={(e) => setTiempo(e.target.value)} />
                </div>
                <div>
                    <label>Distancia (km):</label>
                    <input type="number" step="0.01" value={distancia} onChange={(e) => setDistancia(e.target.value)} />
                </div>
                <div>
                    <label>Fotos (URLs separadas por comas):</label>
                    <input type="text" value={fotos} onChange={(e) => setFotos(e.target.value)} />
                </div>
                <button type="submit">Registrar</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
}
