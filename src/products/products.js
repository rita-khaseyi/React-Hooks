import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './product.css';

const ProductPage = () => {
  // Initialize state variables using the 'useState' hook
  // 'products' holds the array of products, 'setProducts' is used to update 'products'
  const [products, setProducts] = useState([]);
  // Get the current location object using the 'useLocation' hook from 'react-router-dom'
  const location = useLocation();

  // Using the 'useEffect' hook to perform side effects such as data fetching  after component is mounted
  useEffect(() => {
    // Define an async function 'getProducts' to fetch data from the API
    const getProducts = async () => {
      try {
        // Fetching the product data from the API endpoint
        const response = await fetch('https://dummyjson.com/products?limit=10');
        const data = await response.json();
        // Updating the 'products' state with the fetched data
        setProducts(data.products);

        // Get query parameters from the current URL
        const queryParams = new URLSearchParams(location.search);
        const addedProductId = queryParams.get('addedProduct');

        // If 'addedProduct' query parameter exists, fetch the product with the specified ID
        if (addedProductId) {
          const addedProductResponse = await fetch(`https://dummyjson.com/products/${addedProductId}`);
          const addedProduct = await addedProductResponse.json();
          // Add the fetched product to the 'products' state using the spread operator
          setProducts((prevProducts) => [addedProduct, ...prevProducts]);
        }
      } catch (error) {
        // Log any errors that occur during the data fetching process
        console.error(error);
      }
    };

    // Call the 'getProducts' function when the component is mounted
    getProducts();
  }, [location]);

  // Render the component's UI
  return (
    <div id="products">
      {/* Link to the "/addproduct" route with the "add-product-button" class */}
      <Link to="/addproduct" className="add-product-button">
        Add Product
      </Link>

      <div className="product">
        {/* Iterate through 'products' array and create a Link for each product */}
        {products.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="product-link">
            <div className="main">
              <img src={item.thumbnail} alt={item.title} />
              <h2 className="product-title">{item.title}</h2>
              <p className="product-price">{item.price}</p>
              <p className="product-discount">{item.discountPercentage}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
