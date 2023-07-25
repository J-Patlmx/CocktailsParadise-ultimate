import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import AppRoutes from './root';


const root = ReactDOM.createRoot(document.getElementById('root'));// Création de la racine pour le rendu de l'application
root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);