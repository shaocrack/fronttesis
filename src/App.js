// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Compras from './components/compras';
import Pago from './components/pago';
import Banco from './components/banco';
import AgregarTarjeta from './components/AgregarTarjeta';
import ConsultarTarjeta from './components/ConsultarTarjeta';
import Final from './components/final';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/banco" element={<Banco />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/banco/agregar-tarjeta" element={<AgregarTarjeta />} />
        <Route path="/banco/consultar-tarjeta" element={<ConsultarTarjeta />} />
        <Route path="/final" element={<Final />} /> 
      </Routes>
    </Router>
  );
};

export default App;
