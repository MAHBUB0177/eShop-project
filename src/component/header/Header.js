import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>


      <div className="header">

        <nav className="nav">
          <Link to="/shop">Shop</Link>
          <Link to="/order">Order</Link>
          <Link to="/review">Review</Link>
          {/* <a to="manage/">Manage</a> */}
          <Link to="/inventory">Inventory</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>

      </div>
    </div>
  );
};

export default Header;