import { useState, useEffect } from "react";
import { auth, db, doc, getDoc, setDoc, updateDoc } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../estilos/perfil.css";

export default function Perfil() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("");
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
        setFoto(userData.foto || user.photoURL || "");
      } else {
        await setDoc(doc(db, "usuarios", user.uid), { 
          nombre: user.displayName || "", 
          telefono: "", 
          email: user.email || "",
          foto: user.photoURL || "" 
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
      await updateDoc(doc(db, "usuarios", user.uid), { nombre, telefono, email, foto });
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
      <form onSubmit={guardarDatos}>
        <label>Foto de Perfil:</label>
        <img src={foto || "https://via.placeholder.com/150"} alt="Foto de perfil" className="perfil-foto" />
        <input type="text" placeholder="URL de la foto" value={foto} onChange={(e) => setFoto(e.target.value)} />

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