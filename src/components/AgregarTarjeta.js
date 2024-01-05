// src/components/AgregarTarjeta.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AgregarTarjeta = () => {
  const navigate = useNavigate();
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [cvv, setCvv] = useState('');
  const [saldo, setSaldo] = useState('');

  const handleAgregarTarjeta = async () => {
    try {
      const response = await axios.post('http://localhost:5000/banco/agregar-tarjeta', {
        nombre_propietario: nombrePropietario,
        numero_tarjeta: numeroTarjeta,
        fecha_expiracion: fechaExpiracion,
        cvv: cvv,
        saldo: saldo
      });

      console.log(response.data);
      navigate('/banco'); // Utilizar navigate para redirigir a la página del banco después de agregar la tarjeta
    } catch (error) {
      console.error('Error al agregar la tarjeta:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Agregar Tarjeta</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nombrePropietario" className="form-label">Nombre del Propietario:</label>
          <input
            type="text"
            className="form-control"
            id="nombrePropietario"
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
          />
        </div>
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
        <div className="mb-3">
          <label htmlFor="fechaExpiracion" className="form-label">Fecha de Expiración:</label>
          <input
            type="text"
            className="form-control"
            id="fechaExpiracion"
            value={fechaExpiracion}
            onChange={(e) => setFechaExpiracion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">CVV:</label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="saldo" className="form-label">Saldo:</label>
          <input
            type="text"
            className="form-control"
            id="saldo"
            value={saldo}
            onChange={(e) => setSaldo(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAgregarTarjeta}>
          Agregar Tarjeta
        </button>
      </form>
    </div>
  );
};

export default AgregarTarjeta;
