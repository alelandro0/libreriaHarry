import React, { useState, useEffect } from 'react';
import './card.css';

const Card = ({ addToCart }) => {
  const [harryPotterMovies, setHarryPotterMovies] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (movie) => {
    const totalPrice = 9.99 * quantity;
    const cartItem = {
      title: movie.title,
      quantity: quantity,
      price: 9.99,
      total: totalPrice,
    };
    addToCart(cartItem);

    const updatedMovies = harryPotterMovies.map((m) => {
      if (m.id === movie.id) {
        const updatedQuantity = m.available_quantity - quantity;
        return {
          ...m,
          available_quantity: updatedQuantity,
        };
      }
      return m;
    });
    setHarryPotterMovies(updatedMovies);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=6fbd29657d5518e0acaf2655425b32fb&query=Harry+Potter')
      .then(response => response.json())
      .then(data => {
        const movies = data.results.map(result => {
          return {
            id: result.id,
            title: result.title,
            available_quantity: 15, // Inicialmente, se establece en 15
            poster_path: result.poster_path,
          };
        });
        setHarryPotterMovies(movies);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <ul>
        {harryPotterMovies && harryPotterMovies.length > 0 ? (
          harryPotterMovies.map(movie => (
            <li className='containerFather' key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className='contenido1'>
                <h3 style={{ color: 'white' }}>{movie.title}</h3>
                <div>
                  <label style={{ color: 'white' }} className='texto'>Cantidades disponibles:</label>
                  {movie.available_quantity > 0 ? (
                    <p style={{ color: 'white' }} className='texto'>{movie.available_quantity}</p>
                  ) : (
                    <p style={{ color: 'red' }} className='texto'>Agotado</p>
                  )}
                </div>
                <div>
                  <p style={{ color: 'white' }} className='texto'>Precio: $9.99</p>
                  <label style={{ color: 'white' }} className='texto'>Cantidad:</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                  />
                </div>
                <button
                  className='btnCard'
                  onClick={() => handleAddToCart(movie)}
                  style={{ backgroundColor: 'green', color: 'white' }}
                  disabled={movie.available_quantity === 0 || quantity < 1}
                >
                  Agregar al carrito
                </button>
              </div>
            </li>
          ))
        ) : (
          <div>Cargando...</div>
        )}
      </ul>
    </div>
  );
};

export default Card;






