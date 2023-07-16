

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addProduct.css';

const AddProductPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          price,
          discountPercentage,
        }),
      });
      const newProduct = await response.json();

      // Redirect to ProductPage and pass the new product ID as a parameter
      navigate(`/products?addedProduct=${newProduct.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          className="input"
        />
        <input
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Price"
          className="input"
        />
        <input
          type="text"
          value={discountPercentage}
          onChange={(event) => setDiscountPercentage(event.target.value)}
          placeholder="Discount Percentage"
          className="input"
        />
        <button type="submit" className="button">Add Product</button>
      </form>
    </div>
  );
  

 
};

export default AddProductPage;

