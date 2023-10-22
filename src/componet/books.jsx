import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // Importa Link desde react-router-dom
import Nav from './layout/nav';
import './book.css';
import SubCard from '../cardPlace/subCard';
import Card from './card';

function Books() {
  const [showSubCard, setShowSubCard] = useState(false); // Inicialmente, mostrar Card
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Producto agregado al carrito:", product);
  };

  const navigateToCart = () => {
    setShowSubCard(true); // Mostrar el componente SubCard al hacer clic en "IR AL CARRITO DE COMPRAS"
  };

  return (
    <div>
      <Nav />
      <div className="title-boton">
        <h1>{showSubCard ? 'Carrito de Compras' : 'Libros Disponibles'}</h1>
        {showSubCard ? (
          // Agrega un enlace para volver a la tarjeta (Card)
          <a href="http://localhost:5173/" style={{color:'white',textDecoration:'none',
        padding:'1rem',fontSize:'30px'}}>X</a>
        ) : (
          <button
            style={{ background: 'green', height: '70px', display: 'block' }}
            onClick={navigateToCart}
          >
            IR AL CARRITO DE COMPRAS
          </button>
        )}
      </div>
      {showSubCard ? (
        <SubCard cart={cart} />
      ) : (
        <Card addToCart={addToCart} />
      )}
    </div>
  );
}

export default Books;



