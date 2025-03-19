import React, { useEffect, useState, useContext } from 'react';
import { db } from '../config/firebaseConfig';
import { storage } from '../config/firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { UserContext } from '../contextos/UserContext';
import '../estilos/galeria.css'; // Importa el archivo CSS desde la carpeta estilos

import Foto1 from '../assets/senderismo-puente-mayo-C40iVJh0.png';
import Foto2 from '../assets/screenshot_2022_01_05_163542_1641414983651-B8WuXdfB.png'; // Cambia esto por la segunda imagen
import Foto3 from '../assets/images-2gHkLhHA.png'; // Cambia esto por la tercera imagen
import Foto4 from '../assets/images12-oeE7nE2w.png'; // Cambia esto por la cuarta imagen
import Foto5 from '../assets/images2-DSUdwqox.png'; // Cambia esto por la cuarta imagen
import Foto6 from '../assets/images5-D-sqajzY.png'; // Cambia esto por la cuarta imagen

const Galeria = () => {
  // Arreglo de fotos con las imágenes importadas y sus años
  const fotos = [
    { id: 1, url: Foto1, year: 2025 },
    { id: 2, url: Foto2, year: 2024 },
    { id: 3, url: Foto3, year: 2023 },
    { id: 4, url: Foto4, year: 2022 },
    { id: 5, url: Foto5, year: 2021 },
    { id: 6, url: Foto6, year: 2020 }, 
  ];

  return (
    <div className="container">
      <h1>Galería</h1>
      <p>Revive nuestras experiencias a través de nuestra galería de fotos inolvidables</p>
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