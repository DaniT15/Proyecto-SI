import React, { useState } from 'react';
import { db, storage } from '../config/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import '../estilos/galeria.css';

const SubirFoto = () => {
  const [file, setFile] = useState(null);
  const [year, setYear] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !year) {
      setStatus('Por favor, selecciona una imagen y un año.');
      return;
    }

    try {
      const storageRef = ref(storage, `galeria/${file.name}`);
      await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, 'galeria'), {
        url: imageUrl,
        year: parseInt(year)
      });

      setStatus('Foto subida con éxito.');
      setFile(null);
      setYear('');
    } catch (error) {
      console.error('Error al subir la foto:', error);
      setStatus('Error al subir la foto.');
    }
  };

  return (
    <div className="subir-foto-contenedor">
      <h2 className="subir-foto-titulo">Subir Foto a la Galería</h2>
      <form onSubmit={handleSubmit} className="subir-foto-formulario">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <input
          type="number"
          placeholder="Año"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Subir Foto</button>
      </form>
      {status && <p className="status-mensaje">{status}</p>}
    </div>
  );
};

export default SubirFoto;