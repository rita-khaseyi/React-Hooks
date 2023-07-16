
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './product.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=10');
        const data = await response.json();
        setProducts(data.products);

        const queryParams = new URLSearchParams(location.search);
        const addedProductId = queryParams.get('addedProduct');
        if (addedProductId) {
          const addedProductResponse = await fetch(`https://dummyjson.com/products/${addedProductId}`);
          const addedProduct = await addedProductResponse.json();
          setProducts((prevProducts) => [addedProduct, ...prevProducts]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, [location]);

  return (
    <div id="products">
      <Link to="/addproduct" className="add-product-button">
        Add Product
      </Link>

      <div className="product">
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

