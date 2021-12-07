import React from 'react';
import { useState, useEffect } from 'react';
import OrderReview from './OrderReview';

const Order = () => {

 const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem("cart");
  const initialValue = JSON.parse(saved);
  return initialValue || {};
 });

 console.log(cart)

 return (

  <div>

   {
    cart.map(cart =>
     <OrderReview cart={cart}  />
    )
   }

{/* <OrderReview cart={cart}  /> */}
   
  </div>
 );
};

export default Order;