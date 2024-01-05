import React from 'react';
import { Link } from 'react-router-dom';

const Compras = () => {
  // Puedes agregar aquí la lógica para cargar productos o elementos seleccionables

  const handlePagar = () => {
    // Lógica para manejar el pago, como redirigir a la página de pago
    // Puedes usar el componente <Link> de react-router-dom para navegar a la página de pago
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Página de Compras</h2>
      {/* Aquí deberías agregar elementos seleccionables, productos, etc. */}
      <p>Selecciona tus productos.</p>
      {/* Agrega un botón para pagar */}
      <Link to="/pago" className="btn btn-primary">
        Pagar
      </Link>
      <p className="mt-3">
        <Link to="/">Volver al Inicio</Link>
      </p>
    </div>
  );
};

export default Compras;
