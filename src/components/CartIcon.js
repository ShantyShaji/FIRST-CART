// src/CartIcon.js
import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from './CartContext'; // Ensure this import is correct

const CartIcon = () => {
  const { cart, toggleCart } = useContext(CartContext);

  return (
    <div className="fixed top-4 right-4">
      <div className="relative">
        <button onClick={toggleCart}>
          <FaShoppingCart size={30} />
          {cart.length > 0 && (
            <span className="absolute top-0 bottom-[8px] right-0 inline-flex items-center justify-center w-[20px] h-[20px] text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default CartIcon;
