import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name: username,
        email: email,
        password: password,
      });
      console.log(response.data);
      // Puedes manejar la respuesta del servidor según tus necesidades
      // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito, por ejemplo
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Error de registro:', error.message);
      // Aquí podrías manejar errores y mostrar mensajes de error al usuario
    }
  };

  // Función para redirigir al usuario después del registro exitoso
  const handleRegistrationSuccess = () => {
    return <Navigate to="/login" replace />;
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center mb-4">Registro</h2>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Usuario:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electrónico:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleRegister}>
              Registrarse
            </Button>
          </Form>
          {/* Redirige al usuario si el registro fue exitoso */}
          {registrationSuccess && handleRegistrationSuccess()}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;