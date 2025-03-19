import React, { useEffect, useState, useContext } from 'react';
import { db } from '../config/firebaseConfig';
import { storage } from '../config/firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { UserContext } from '../contextos/UserContext';
import '../estilos/galeria.css';

const Galeria = () => {
  const [fotos, setFotos] = useState([]);
  const [foto, setFoto] = useState(null);
  const [year, setYear] = useState('');
  const { logged } = useContext(UserContext);

  useEffect(() => {
    const fetchFotos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'galeria'));
        const fotosArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        fotosArray.sort((a, b) => b.year - a.year);
        setFotos(fotosArray);
      } catch (error) {
        console.error("Error al obtener fotos:", error);
      }
    };
  
    fetchFotos();
  }, []);

  const subirFoto = async (e) => {
    e.preventDefault();
    console.log("Subiendo foto...");
  
    if (!foto || !year) {
      alert('Completa todos los campos');
      return;
    }
  
    try {
      console.log("Subiendo a Storage...");
      const storageRef = ref(storage, `galeria/${Date.now()}_${foto.name}`);
      await uploadBytes(storageRef, foto);
      console.log("Foto subida a Storage, obteniendo URL...");
      const url = await getDownloadURL(storageRef);
      console.log("URL obtenida:", url);
  
      console.log("Guardando en Firestore...");
      await addDoc(collection(db, 'galeria'), { url, year: parseInt(year) });
      console.log("Foto guardada en Firestore");
  
      alert('Foto subida correctamente');
      
      // Limpiar y recargar
      setFoto(null);
      setYear('');
      document.querySelector('form').reset(); // limpia el input de archivo
  
      const querySnapshot = await getDocs(collection(db, 'galeria'));
      const fotosArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      fotosArray.sort((a, b) => b.year - a.year);
      setFotos(fotosArray);
    } catch (error) {
      console.error("Error al subir foto:", error);
      alert("Error al subir la foto. Intenta de nuevo.");
    }
  };

  return (
    <div className='container'>
      <h1>Galería</h1>
      <p>Revive nuestras experiencias a través de nuestra galería de fotos inolvidables</p>
      
      {logged ? (
        <form onSubmit={subirFoto}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
            required
          />
          <input
            type="number"
            placeholder="Año"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
          <button type="submit">Subir Foto</button>
        </form>
      ) : (
        <p>Debes iniciar sesión para subir fotos.</p>
      )}

      <div className="galeria-grid">
        {fotos.map((foto) => (
          <div key={foto.id} className="foto-card">
            <img src={foto.url} alt={`Foto ${foto.year}`} />
            <h3>{foto.year}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;