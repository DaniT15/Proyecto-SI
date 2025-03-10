export const RutaLP = ({nombre, imagen}) => {
  return (
    <div className="carta">
        <h2>{nombre}</h2>
        <img src={imagen} className='img-carta'></img>
    </div>
  )
}

