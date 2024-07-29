// src/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    setError('');
    navigate('/products');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill out all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    alert('Registration successful!');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-8">Welcome to the Website</h1>
        <div className="space-x-4 mb-8">
          <button
            onClick={() => setShowLogin(true)}
            className={`px-4 py-2 rounded-lg ${showLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Login
          </button>
          <button
            onClick={() => setShowLogin(false)}
            className={`px-4 py-2 rounded-lg ${!showLogin ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Register
          </button>
        </div>
        {showLogin ? (
          <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleLoginSubmit}>
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg" pattern=".{8,}" title="Eight or more characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              Login
            </button>
          </form>
        ) : (
          <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleRegisterSubmit}>
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg" pattern=".{8,}" title="Eight or more characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg" pattern=".{8,}" title="Eight or more characters"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
