import React, { useState, useEffect, useContext } from 'react';
import { uploadImage } from '../config/supabase';
import { UserContext } from '../contextos/UserContext';
import { supabase } from '../config/supabase';
import '../estilos/galeria.css';

const Galeria = () => {
  const [fotos, setFotos] = useState([]);
  const [foto, setFoto] = useState(null);
  const [year, setYear] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const { logged } = useContext(UserContext);

  useEffect(() => {
    const fetchFotos = async () => {
      try {
        console.log("Fetching photos...");  // Log de depuración
        const { data, error } = await supabase
          .from('galeria')
          .select('*')
          .order('year', { ascending: false });

        if (error) {
          console.error('Error al obtener fotos:', error);
          return;
        }

        console.log("Fotos obtenidas:", data); // Log de depuración
        setFotos(data);
      } catch (error) {
        console.error('Error al obtener fotos:', error);
      }
    };

    fetchFotos();
  }, []);

  const subirFoto = async (e) => {
    e.preventDefault();

    if (!foto || !year) {
      alert('Completa todos los campos');
      return;
    }

    setIsUploading(true);

    try {
      const user = auth.currentUser;
      const url = await uploadImage(foto, 'imagenes', 'galeria');

      const { data, error } = await supabase
        .from('galeria')
        .insert([
          {
            url: url,
            year: parseInt(year),
            user_id: user.uid,
          },
        ]);

      if (error) {
        console.error('Error al insertar en Supabase:', error);
        return;
      }

      setFotos((prevFotos) => [data[0], ...prevFotos]);
      setFoto(null);
      setYear('');
      document.querySelector('form').reset();
    } catch (error) {
      console.error('Error al subir la foto:', error);
      alert('Error al subir la foto. Intenta de nuevo.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container">
      <h1>Galería</h1>
      <p>Revive nuestras experiencias a través de nuestra galería de fotos inolvidables</p>

      {logged ? (
        <form onSubmit={subirFoto}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
            disabled={isUploading}
          />
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Año de la foto"
          />
          <button type="submit" disabled={isUploading}>
            {isUploading ? 'Subiendo...' : 'Subir Foto'}
          </button>
        </form>
      ) : (
        <p>Debes estar logueado para subir fotos.</p>
      )}

      <div className="galeria-grid">
        {fotos.length > 0 ? (
          fotos.map((foto) => (
            <div key={foto.id} className="foto-card">
              <img src={foto.url} alt={`Foto de ${foto.year}`} />
              <div className="foto-info">
                <h3>Foto del año {foto.year}</h3> {/* Año destacado */}
              </div>
            </div>
          ))
        ) : (
          <p>No hay fotos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Galeria;