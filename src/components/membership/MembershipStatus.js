import React from 'react';
import './MembershipStatus.css';

const MembershipStatus = () => {
  return (
    <div className="membership-status">
      <h2>Estado de Membresía</h2>
      <div className="membership-info">
        <div className="membership-type">
          <span className="label">Tipo:</span>
          <span className="value">Premium</span>
        </div>
        <div className="membership-validity">
          <span className="label">Válido hasta:</span>
          <span className="value">31/12/2024</span>
        </div>
        <div className="membership-status-indicator active">
          Activo
        </div>
      </div>
      <div className="membership-benefits">
        <h3>Beneficios Incluidos:</h3>
        <ul>
          <li>Acceso ilimitado al gimnasio</li>
          <li>Clases grupales incluidas</li>
          <li>Acceso a la piscina</li>
          <li>Casillero personal</li>
        </ul>
      </div>
    </div>
  );
};

export default MembershipStatus;