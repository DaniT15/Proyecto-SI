import React, { useState, useEffect } from 'react';
import { auth, db, doc, getDoc, setDoc, updateDoc } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import FotoPerfil from '../componentes/FotoPerfil'; // Importa el componente FotoPerfil

import "../estilos/editarPerfil.css";

export default function EditarPerfil() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      cargarDatos();
    } else {
      navigate("/login");
    }
  }, [user]);

  const cargarDatos = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "usuarios", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        setNombre(userData.nombre || "");
        setTelefono(userData.telefono || "");
        setEmail(userData.email || user.email || "");
      } else {
        await setDoc(doc(db, "usuarios", user.uid), { 
          nombre: user.displayName || "", 
          telefono: "", 
          email: user.email || "",
        });
      }
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
    setLoading(false);
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateDoc(doc(db, "usuarios", user.uid), { nombre, telefono, email });
      alert("Datos actualizados correctamente ✅");
    } catch (error) {
      console.error("Error actualizando datos:", error);
      alert("Hubo un problema al actualizar ❌");
    }

    setLoading(false);
  };

  return (
    <div className="perfil-container">
      <h2>Editar Perfil</h2>

      {/* Aquí agregamos el componente FotoPerfil */}
      <div className="foto-perfil-container">
        <FotoPerfil />
      </div>

      <form onSubmit={guardarDatos}>
        <label>Nombre:</label>
        <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label>Teléfono:</label>
        <input type="text" placeholder="Número de teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

        <label>Correo Electrónico:</label>
        <input type="email" placeholder="Correo electrónico" value={email} readOnly disabled />

        <button type="submit" disabled={loading}>{loading ? "Guardando..." : "Guardar Cambios"}</button>
      </form>
    </div>
  );
}