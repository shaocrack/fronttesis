import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para navegar

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data); // Puedes manejar la respuesta según tus necesidades

      // Aquí podrías almacenar el token de acceso en el estado global o en las cookies, por ejemplo

      // Navega a la página de compras después de iniciar sesión exitosamente
      navigate('/compras');
    } catch (error) {
      console.error('Error de inicio de sesión:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Inicio de Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
      <p className="mt-3">
        ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
};

export default Login;
