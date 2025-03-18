import React, { useEffect, useState } from 'react';
import { db } from '../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Galeria = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const fetchFotos = async () => {
      const querySnapshot = await getDocs(collection(db, 'galeria'));
      const fotosArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Ordenar por año descendente
      fotosArray.sort((a, b) => b.year - a.year);
      setFotos(fotosArray);
    };

    fetchFotos();
  }, []);

  return (
    <div className='container'>
      <h1>Galería</h1>
      <p>Revive nuestras experiencias a través de nuestra galería de fotos inolvidables</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {fotos.map((foto) => (
          <div key={foto.id} style={{ textAlign: 'center' }}>
            <img src={foto.url} alt={`Foto ${foto.year}`} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <h3>{foto.year}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;