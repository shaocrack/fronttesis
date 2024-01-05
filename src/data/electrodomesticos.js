// src/data/electrodomesticos.js

const electrodomesticos = [
    { nombre: 'Lavadora', precio: getRandomPrice(35, 250) },
    { nombre: 'Refrigerador', precio: getRandomPrice(35, 250) },
    { nombre: 'Licuadora', precio: getRandomPrice(35, 250) },
    { nombre: 'Microondas', precio: getRandomPrice(35, 250) },
    { nombre: 'Cafetera', precio: getRandomPrice(35, 250) },
    { nombre: 'Aspiradora', precio: getRandomPrice(35, 250) },
    { nombre: 'Tostadora', precio: getRandomPrice(35, 250) },
    { nombre: 'Batidora', precio: getRandomPrice(35, 250) },
    { nombre: 'Plancha', precio: getRandomPrice(35, 250) },
    { nombre: 'Secador de pelo', precio: getRandomPrice(35, 250) },
  ];
  
  function getRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }
  
  export default electrodomesticos;
  