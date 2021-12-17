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
import Layout from './component/Layout';
// import PrivateRoute from './component/Inventory/Inventory';


// import PrivateRoute from 'routes/PrivateRoute'; 

// export const ProductContext = createContext();


export const UserContext=createContext() 
function App() {
  // const [detailsProduct, setdetailsProduct] = useState([]);
  const [logedInUser, setLogedInUser]=useState([]);
  return (
    
    < UserContext.Provider value={[logedInUser, setLogedInUser]}>


     
      

    
      
      <Layout>
      {/* <Navbar1 /> */}
      {/* <h4 style={{ color: 'blue', textAlign: 'center' }}>Welcome To Our eShop...</h4>

      <p style={{ backgroundColor: 'blue' }}>
        <hr></hr>
      </p> */}
      <Routes>
        


        <Route path="/shop" element={<Shop />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />}/>
        {/* <PrivateRoute path="/inventory" element={<PrivateRoute/>}/> */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
      </Layout>
    
     

    </UserContext.Provider>
  
  );
  

}

export default App;
