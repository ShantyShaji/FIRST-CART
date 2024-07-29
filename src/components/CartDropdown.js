// src/CartDropdown.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FaTrash } from 'react-icons/fa';

const CartDropdown = () => {
  const { cart, removeFromCart, placeOrder } = useContext(CartContext);

  return (
    <div className="absolute top-12 right-4 bg-white border border-gray-300 rounded-lg shadow-lg w-64">
      <h2 className="text-lg font-bold p-4 border-b border-gray-300">Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <li className="p-4 text-gray-700">Your cart is empty.</li>
        ) : (
          cart.map((product) => (
            <li key={product.id} className="flex items-center justify-between p-4 border-b border-gray-300">
              <span>{product.name} - ₹{product.price}</span>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </li>
          ))
        )}
      </ul>
      {cart.length > 0 && (
        <div className="p-4 border-t border-gray-300">
          <button
            onClick={placeOrder}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
