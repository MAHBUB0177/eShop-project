import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // const total=cart.reduce((sum,product)=>sum +product.price,0)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return initialValue || {};
  });
  console.log(cart)
  let total = 0;


  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;

  }


  let tax = total / 10;

  const formatNumber = (num) => {
    const precission = num.toFixed(2);
    return (Number(precission))
  }

  return (
    <div>
      <h4 style={{ color: 'blue' }}>Order Detalis</h4>
      <hr />
      {/* <p>Order Quantity:{cart.length}</p> */}
      <p>price:{formatNumber(total)}</p>
      <p>Tax:{formatNumber(tax)}</p>
      <Link to="/order">
      <button className="btn btn-success btn-sm" >Order Review</button></Link>
    </div>
  );
};

export default Cart;