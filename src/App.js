// import logo from './logo.svg';
import './App.css';
import { Routes,Route,Navigate } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import Navbar from './navbar/navbar';
import ProductPage from './products/products';
import AddProductPage from './products/addProduct';
import ProductDetailsPage from './products/productDetails';



function App() {
  return (
    <div className="App">
      <Navbar />
    
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/addproduct" element={<AddProductPage />} />
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
    </div>

    
  
  
  );
}

export default App;
