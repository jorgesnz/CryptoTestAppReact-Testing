import React from 'react';
import './AccessDenied.scss';

const AccessDenied = () => {
  return (
    <div className="access-denied-container">
      <div className="access-denied-box">
        <h2>Acceso Denegado</h2>
        <p>No tienes permiso para acceder</p>
      </div>
    </div>
  );
};

export default AccessDenied;
