import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../App';
import Cart from '../Cart/Cart';
import ProductDetails from '../ProductDetails/ProductDetails';
import Product from '../Propduct/Product';
import './shop.css'

const Shop = () => {
  <h1>shoop...........</h1>
  const [product,setProduct]=useState([]);
  const [cart,setCart]=useState([])
  const [detailsProduct,setdetailsProduct]=useContext(ProductContext);

  useEffect (()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setProduct(data)
    })
    localStorage.setItem("cart", JSON.stringify(cart))
  },[cart]);
console.log(cart.length)
  const handelProduct=(product)=>{
    setdetailsProduct(product)
  }
const countProduct=(product)=>{
  const newCart = [...cart, product];
  setCart(newCart)
  

}



  return (
    <div className="shop-container">
    
      <div className="product-container">
      {
          product.map(pd => <Product product={pd}
            key={pd.key}
            handelProduct={handelProduct}
            countProduct={countProduct}
             />)
        }

      </div >
      <div className="cart-container">
        <Cart 
        />
      </div>

    </div>
  );
};

export default Shop;