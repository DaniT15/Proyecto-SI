import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import moment from 'moment';


export default function CrearActividad() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [rutaId, setRutaId] = useState('');
    const [rutas, setRutas] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchRutas = async () => {
            const querySnapshot = await getDocs(collection(db, 'rutas'));
            const fetchedRutas = querySnapshot.docs.map(doc => ({
                id: doc.id,
                nombre: doc.data().nombre,
            }));
            setRutas(fetchedRutas);
        };
        fetchRutas();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fechaHora = moment(`${fecha} ${hora}`, 'YYYY-MM-DD HH:mm').toDate();
            await addDoc(collection(db, 'actividades'), {
                titulo,
                descripcion,
                fecha: fechaHora,
                rutaId,
            });
            setStatus('Actividad registrada con éxito.');
            setTitulo('');
            setDescripcion('');
            setFecha('');
            setHora('');
            setRutaId('');
        } catch (error) {
            console.error('Error al registrar la actividad:', error);
            setStatus('Error al registrar la actividad.');
        }
    };

    return (
        <div>
            <h2>Registrar Actividad</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <div>
                    <label>Fecha:</label>
                    <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>
                <div>
                    <label>Hora:</label>
                    <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
                </div>
                <div>
                    <label>Ruta:</label>
                    <select value={rutaId} onChange={(e) => setRutaId(e.target.value)}>
                        <option value="">Seleccionar Ruta</option>
                        {rutas.map(ruta => (
                            <option key={ruta.id} value={ruta.id}>{ruta.nombre}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Registrar</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
}
