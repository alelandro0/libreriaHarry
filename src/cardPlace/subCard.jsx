import React from 'react';
import './subCard.css';

function SubCard({ cart, removeFromCart }) {
  return (
    <div>
    
      <table>
        <thead>
          <tr>
            <th>Libros</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {cart && cart.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${item.total.toFixed(2)}</td>
              <td>
                <button onClick={() => removeFromCart(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubCard;
