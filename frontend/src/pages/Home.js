import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Product Inventory</h1>
      <p><Link to="/register">Register</Link> or <Link to="/login">Login</Link> to manage products.</p>
      <p><Link to="/products">View Products</Link></p>
      <p><Link to="/external-api">Fetch External Data</Link></p>
    </div>
  );
};

export default Home;
