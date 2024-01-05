import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <h2>¡Bienvenido a la página de inicio!</h2>
      <p>Seleccione una opción:</p>
      <div>
        <Link to="/login" className="btn btn-primary">
          Iniciar Sesión
        </Link>
      </div>
      <div>
        <Link to="/register" className="btn btn-success">
          Registrarse
        </Link>
      </div>
      {/* Nuevo botón para "Mi Banco" */}
      <div>
        <Link to="/banco" className="btn btn-info">
          Mi Banco
        </Link>
      </div>
    </div>
  );
};

export default Home;