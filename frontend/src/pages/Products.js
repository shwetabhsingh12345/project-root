import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [editProduct, setEditProduct] = useState(null);

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/products');
        setProducts(res.data.products);
      } catch (err) {
        console.error('Error fetching products', err);
      }
    };
    fetchProducts();
  }, []);

  // Handle product creation
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/products', newProduct);
      setProducts([...products, res.data.product]); // Add new product to the list
      setNewProduct({ name: '', price: '' }); // Reset form
    } catch (err) {
      console.error('Error creating product', err);
    }
  };

  // Handle product deletion
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      setProducts(products.filter(product => product._id !== id)); // Remove from list
    } catch (err) {
      console.error('Error deleting product', err);
    }
  };

  // Handle product editing
  const handleEditProduct = (product) => {
    setEditProduct(product); // Set the product to be edited
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/api/products/${editProduct._id}`, editProduct);
      setProducts(products.map(product => product._id === editProduct._id ? res.data.product : product));
      setEditProduct(null); // Reset editing form
    } catch (err) {
      console.error('Error updating product', err);
    }
  };

  return (
    <div>
      <h2>Products</h2>

      {/* New Product Form */}
      <form onSubmit={handleCreateProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button type="submit">Create Product</button>
      </form>

      {/* Edit Product Form */}
      {editProduct && (
        <form onSubmit={handleUpdateProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={editProduct.name}
            onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Product Price"
            value={editProduct.price}
            onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
          />
          <button type="submit">Update Product</button>
        </form>
      )}

      {/* Display Products */}
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} - ${product.price}
              <button onClick={() => handleEditProduct(product)}>Edit</button>
              <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Products;
