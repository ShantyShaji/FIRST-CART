// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import { CartProvider } from './components/CartContext'; // Ensure this import is correct

function App() {
  return (
    <CartProvider> {/* Wrap the Router with CartProvider */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
