import React from 'react';
import './navbar.css';


const Navbar=()=>{
    return(
      <nav className='navbar'>
        <h3>Products</h3>
        <ul className='ul'>
             <li><a href="/login">Login</a></li>
             <li><a href="/products">Products</a></li>
             <li><a href="/addproduct">Add products</a>  </li>
       </ul>
        


      </nav>  
    )

}
export default Navbar;

