import React, { useState } from 'react';
import axios from 'axios';

const ConsultarTarjeta = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [tarjeta, setTarjeta] = useState(null);

  const handleConsultarTarjeta = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/banco/consultar-tarjeta/${numeroTarjeta}`);
      setTarjeta(response.data);
    } catch (error) {
      console.error('Error al consultar la tarjeta:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Consultar Tarjeta</h2>
      <div className="mb-3">
        <label htmlFor="numeroTarjeta" className="form-label">Número de Tarjeta:</label>
        <input
          type="text"
          className="form-control"
          id="numeroTarjeta"
          value={numeroTarjeta}
          onChange={(e) => setNumeroTarjeta(e.target.value)}
        />
      </div>
      <button type="button" className="btn btn-success" onClick={handleConsultarTarjeta}>
        Consultar Tarjeta
      </button>
      {tarjeta && (
        <div className="mt-3">
          <h4>Información de la Tarjeta:</h4>
          <p><strong>Nombre del Propietario:</strong> {tarjeta.nombre_propietario}</p>
          <p><strong>Número de Tarjeta:</strong> {tarjeta.numero_tarjeta}</p>
          <p><strong>Fecha de Expiración:</strong> {tarjeta.fecha_expiracion}</p>
          <p><strong>CVV:</strong> {tarjeta.cvv}</p>
          <p><strong>Saldo:</strong> {tarjeta.saldo}</p>
        </div>
      )}
    </div>
  );
};

export default ConsultarTarjeta;
