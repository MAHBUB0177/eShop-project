import React, { createContext } from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router
} from "react-router-dom";

import Header from './component/header/Header';
import Footer from './component/Footer/Footer';
import Shop from './component/Shop/Shop';
import Product from './component/Propduct/Product';
import ProductDetails from './component/ProductDetails/ProductDetails';
import { useState } from 'react/cjs/react.development';
import Navbar1 from './component/Sidebar/Navbar';
import Contact from './component/Contact/Contact'
import LogIn from './component/LogIn/LogIn'
import About from './component/About/About';
import Order from './component/Order/Order';
export const ProductContext = createContext();
function App() {
  const [detailsProduct, setdetailsProduct] = useState([]);
  return (
    < ProductContext.Provider value={[detailsProduct, setdetailsProduct]}>


      <Header />
      <Navbar1 />


      <h1 style={{ color: 'blue', textAlign: 'center' }}>Welcome To Our eShop...</h1>

      <p style={{ backgroundColor: 'blue' }}>
        <hr></hr>
      </p>
      <Routes>
        


        <Route path="/shop" element={<Shop />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />}/>


        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />

    </ProductContext.Provider>
  );

}

export default App;
