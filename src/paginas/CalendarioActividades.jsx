import { Link } from 'react-router-dom'
import Calendario from '../componentes/Calendario';
import '../estilos/calendarioActividades.css'


export default function CalendarioActividades() {
    return (
        <div className='container'>
            <Link to="/crearActividad">
                <button>Crear Actividad</button>
            </Link>
            <Link to="/registrarRuta">
                <button>Registrar Ruta</button>
            </Link>
            <Calendario></Calendario>
        </div>
    )
}
