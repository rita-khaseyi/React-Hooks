import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  // Extract the 'productId' parameter from the URL using the 'useParams' hook from 'react-router-dom'
  const { productId } = useParams();
  // Initialize a state variable 'product' and its setter function 'setProduct'
  // 'product' will hold the details of the product, initially set to null
  const [product, setProduct] = useState(null);

  // Use the 'useEffect' hook to perform side effects (e.g., data fetching) after component is mounted
  useEffect(() => {
    // Define an async function 'getProductDetails' to fetch product data from the API
    const getProductDetails = async () => {
      try {
        // Fetch product details from the API using the 'productId' from the URL
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        // Update the 'product' state with the fetched data
        setProduct(data);
      } catch (error) {
        // Log any errors that occur during the data fetching process
        console.error(error);
      }
    };

    // Call the 'getProductDetails' function when the component is mounted or when 'productId' changes
    getProductDetails();
  }, [productId]);

  // If 'product' is null (i.e., product details are not yet fetched), display a loading message
  if (!product) {
    return <p>Loading product details...</p>;
  }

  // If 'product' is available (i.e., product details are fetched), render the product details
  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.description}</h2>
        <p>{product.stock}</p>
        <p>{product.category}</p>
        <h4>{product.brand}</h4>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
