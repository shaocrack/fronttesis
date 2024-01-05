// src/components/Pago.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Pago = () => {
  const navigate = useNavigate();
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleInputChange = async (e) => {
    const inputNumeroTarjeta = e.target.value;

    setNumeroTarjeta(inputNumeroTarjeta);

    // Realizar una solicitud al backend para obtener detalles de la tarjeta
    try {
      const response = await axios.get(`http://localhost:5000/banco/consultar-tarjeta/${inputNumeroTarjeta}`);
      const tarjeta = response.data;

      if (tarjeta) {
        setExpiryDate(tarjeta.fecha_expiracion);
        setCvv(tarjeta.cvv);
      } else {
        // Si la tarjeta no se encuentra, puedes restablecer los otros campos
        setExpiryDate('');
        setCvv('');
      }
    } catch (error) {
      console.error('Error al consultar la tarjeta:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Guardar la información de la tarjeta en el estado global o en otro contexto (por ejemplo, Redux)
    // Esto permitirá acceder a la información de la tarjeta desde otras páginas, como Final.js
    // Puedes usar algún estado global como Redux o React Context para manejar esto.

    // Dirigir a la página Final.js después de agregar la tarjeta
    navigate('/final');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Página de Pago</h2>
      <p>Ingrese la información de su tarjeta de crédito:</p>
      {/* Formulario de pago */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Número de Tarjeta:</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            value={numeroTarjeta}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiryDate" className="form-label">Fecha de Vencimiento:</label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
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
        <button type="submit" className="btn btn-primary">Pagar</button>
      </form>
    </div>
  );
};

export default Pago;
