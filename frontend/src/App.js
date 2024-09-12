import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import Profile from './pages/Profile';
import ExternalApi from './pages/ExternalApi';
import './App.css';

const App = () => {
  const isAuthenticated = () => {
    // Check if there is a token in localStorage
    return !!localStorage.getItem('token');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <Navigate to="/products" /> : <Home />} />
        <Route path="/register" element={isAuthenticated() ? <Navigate to="/products" /> : <Register />} />
        <Route path="/login" element={isAuthenticated() ? <Navigate to="/products" /> : <Login />} />
        <Route path="/products" element={isAuthenticated() ? <Products /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated() ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/external-api" element={isAuthenticated() ? <ExternalApi /> : <Navigate to="/login" />} />
        {/* Redirect to home if route not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
