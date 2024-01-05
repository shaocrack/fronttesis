import React from 'react';
import { Link } from 'react-router-dom';

const Banco = () => {
  return (
    <div className="container mt-5">
      <h2>¡Bienvenido a Mi Banco!</h2>
      <div>
        <Link to="/banco/agregar-tarjeta" className="btn btn-primary">
          Agregar Tarjeta
        </Link>
      </div>
      <div>
        <Link to="/banco/consultar-tarjeta" className="btn btn-success">
          Consultar Tarjeta
        </Link>
      </div>
    </div>
  );
};

export default Banco;
