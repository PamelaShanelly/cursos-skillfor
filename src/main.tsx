import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { initializeApp } from "firebase/app";

// 🔥 TU CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBQFO7VFBtQVPdR-2enomT2GyV4qMF1guw",
  authDomain: "cursos-killfor.firebaseapp.com",
  projectId: "cursos-killfor",
  storageBucket: "cursos-killfor.firebasestorage.app",
  messagingSenderId: "241595616194",
  appId: "1:241595616194:web:45fb099a5babd9b27da45b"
};

// 🔥 INICIALIZAR
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
