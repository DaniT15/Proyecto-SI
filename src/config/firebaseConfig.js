import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_KeAHTwWQrC1P89he6SF_bXE94kzOZA4",
  authDomain: "proyecto-si-c5bd4.firebaseapp.com",
  projectId: "proyecto-si-c5bd4",
  storageBucket: "proyecto-si-c5bd4.firebasestorage.app",
  messagingSenderId: "1063848471479",
  appId: "1:1063848471479:web:289563e3e1e6ce780c1632"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Proveedores de autenticación
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithEmailAndPassword, signInWithPopup };