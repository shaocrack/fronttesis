import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import electrodomesticos from '../data/electrodomesticos';

const Final = () => {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCard, setSelectedCard] = useState('');

  useEffect(() => {
    // Aquí hacemos la solicitud al backend para obtener la tarjeta seleccionada
    const fetchTarjetaSeleccionada = async () => {
      try {
        if (selectedCard) {
          const response = await axios.get(`http://localhost:5000/banco/consultar-tarjeta/${selectedCard}`);
          const tarjeta = response.data;
          // Hacer algo con la tarjeta obtenida, si es necesario
        }
      } catch (error) {
        console.error('Error al obtener la tarjeta seleccionada:', error.message);
      }
    };

    fetchTarjetaSeleccionada();
  }, [selectedCard]);  // El efecto se ejecutará cada vez que selectedCard cambie

  const handleSelectProduct = (producto) => {
    const updatedProducts = [...selectedProducts, producto];
    setSelectedProducts(updatedProducts);
    const updatedTotal = updatedProducts.reduce((total, p) => total + parseFloat(p.precio), 0);
    setTotalPrice(updatedTotal);
  };

  const handlePagarSeguro = async () => {
    try {
      if (totalPrice > 500) {
        console.log('Esto es anómalo. Cantidad total supera los $500.00');
      } else {
        console.log('Se ha guardado en la base de datos.');
      }

      const response = await axios.post('http://localhost:5000/compras', {
        tarjeta: selectedCard,
        productos: selectedProducts,
        total: totalPrice,
      });

      console.log(response.data);
      navigate('/pago-confirmado'); // Puedes redirigir a una página de confirmación de pago
    } catch (error) {
      console.error('Error al realizar el pago seguro:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Productos Seleccionados</h2>
      <ul className="list-group">
        {electrodomesticos.map((producto, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {producto.nombre}
            <span className="badge bg-primary rounded-pill">${producto.precio}</span>
            <button
              className="btn btn-success"
              onClick={() => handleSelectProduct(producto)}
            >
              Seleccionar
            </button>
          </li>
        ))}
      </ul>
      <h4 className="mt-4">Total: ${totalPrice.toFixed(2)}</h4>
      <button
        className="btn btn-primary mt-3"
        onClick={handlePagarSeguro}
        disabled={selectedProducts.length === 0}
      >
        Pago Seguro
      </button>
    </div>
  );
};

export default Final;
