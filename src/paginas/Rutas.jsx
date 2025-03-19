import "../estilos/rutas.css"
import flecha from '../assets/flecha-abajo.png'
import separador from '../assets/separador.png'
import Ruta from "../componentes/Ruta"
import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebaseConfig"

export default function Rutas() {

    const [rutas, setRutas] = useState([])

    useEffect(() => {
        const fetchRutas = async () => {
            try {
                const rutasCollection = collection(db, 'rutas');
                const rutasSnapshot = await getDocs(rutasCollection);
                const rutasList = rutasSnapshot.docs.map(doc => ({
                    rutaId: doc.id,
                    ...doc.data()   
                }));
                setRutas(rutasList); 
            } catch (error) {
                console.error('Error al obtener las rutas:', error);
            }
        };

        fetchRutas();  
    }, []);


    return (
        <div className="rutas-div">
            <div className="titulo-div">
                <h1>Nuestras rutas</h1>
                <div className="filtrar-div">
                    <h2>Filtar por</h2>
                    <img className="separador" src={separador} alt="" />
                    <div className="filtrado">
                        <h2>popularidad</h2>
                        <img className="flecha" src={flecha} alt=""/>
                    </div>
                </div>
            </div>
            <div className="lista-rutas">
                {rutas.map(ruta => (
                    <Ruta key={ruta.rutaId} rutaId={ruta.rutaId} />
                ))}
            </div>

        </div>
    )
}