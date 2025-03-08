import '../estilos/landingPage.css'
import avila1 from '../assets/avila.png'
import avila2 from '../assets/avila2.png'
import sabasnieves from '../assets/sabasnieves.svg'
import naiguata from '../assets/naiguata.svg'
import indio from '../assets/elindio.svg'
import profe from '../assets/profe.svg'
import carlo from '../assets/carlo.png'

export default function LandigPage () {
    return (
        <div className='landing-page'>
            <div className='container-avila1'>
                <img src={avila1} className='avila1' />
            </div>
            <div className='rutas'>
                <div className='titulo-rutas'>
                    <h1>Conoce nuestras rutas</h1>
                </div>
                <div className='cartas'>
                    <div className='carta'>
                        <h2>Pico Naiguatá</h2>
                        <img src={sabasnieves} className='img-carta' />
                    </div> 
                    <div className='carta'>
                        <h2>Piedra del indio</h2>
                        <img src={naiguata} className='img-carta' />
                    </div>
                    <div className='carta'>
                        <h2>Sabas nieves</h2>
                        <img src={indio} className='img-carta' />
                    </div>
                </div>
            </div>
            <div className='div-boton'>
                <div className='boton'>
                    <h2>Ver todas las rutas</h2>
                </div>
            </div>
            <div className='div-comparte'>
                <div className='titulo-comparte'>
                    <h1>Comparte con la comunidad UNIMET</h1>
                </div>
                <div className='compartidos'>
                    <div className='compartido'>
                        <div>
                            <img src={profe} className='img-comparte'  />
                        </div>
                        <div>
                            <h3>FRANKLIN SANDOVAL</h3>
                            <p>¡Increíble experiencia! La ruta que elegimos fue perfecta para nuestro nivel y las vistas fueron espectaculares. ¡Lo recomiendo al 100%!</p>
                        </div>
                    </div>
                    <div className='compartido'>
                        <div>
                            <img src={carlo} className='img-comparte'  />
                        </div>
                        <div>
                            <h3>CARLO CARPENTIERI</h3>
                            <p>¡No se pierdan las excursiones!  Sus guías son unos expertos en la naturaleza y hacen que la experiencia sea inolvidable. ¡Definitivamente volveré a reservar con ellos!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-avila1'>
                <img src={avila2} className='avila1' />
            </div>
        </div>
    )
}