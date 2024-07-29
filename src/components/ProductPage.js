// src/ProductPage.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
  { id: 4, name: 'Product 4', price: 25 },
  { id: 5, name: 'Product 5', price: 30 },
  { id: 6, name: 'Product 6', price: 35 },
];

const ProductPage = () => {
  const { cart, addToCart, isCartOpen, toggleCart } = useContext(CartContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="relative">
        <CartIcon />
        {isCartOpen && <CartDropdown />}
      </div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-700">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
