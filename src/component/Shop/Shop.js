import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../App';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../header/Header';
import Layout from '../Layout';
import ProductDetails from '../ProductDetails/ProductDetails';
import Product from '../Propduct/Product';
import './shop.css'
import{Carousel,Card,Modal,Button, CardImg} from 'react-bootstrap'
import  shoping5  from '../images/shoping5.jpg';
import  shoping4  from '../images/shoping4.jpg';
import  shoping3  from '../images/shoping3.jpg';
import shoping1 from '../images/shoping1.jpg'

const Shop = () => {
  <h1>shoop...........</h1>
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([])
  const [detailsProduct, setdetailsProduct] = useContext(ProductContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setProduct(data)
      })
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);
  console.log(cart.length)
  const handelProduct = (product) => {
    setdetailsProduct(product)
  }
  const countProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart)


  }



  return (
    // <Layout >
    <div>


      <div className="slider-style">
        
      <div className="carousel">
      <Card className="manage">
      <Carousel className="manage">
        
  <Carousel.Item interval={1000}>
    <img style={{height:'230px'}}
      className="d-block w-100 "
      src={shoping3}
      alt="First slide"
    />
    <Carousel.Caption>

       <h3>Exclusive Collection Here..</h3> 
      <p style={{fontWeight:'bolder'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <img style={{height:'230px'}}
      className="d-block w-100"
      src={shoping4}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Leatest All Product</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'auto',height:'230px'}}
      className="d-block w-100"
      src={shoping5}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Quality We SHare</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</Card>
      </div>


      <div>
      <Card style={{height:'225px',marginRight:'10px',}}>
      <CardImg top src={shoping1} alt="" style={{height:'160px',width:'100%'}} />
    <Card.Body style={{color:'',}}>
      <Card.Text >
      See all our popular products in this week. You can choose your daily needs products from this list 
      </Card.Text>
     
    </Card.Body>
  </Card>
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt debitis unde vero ut sit dolores odio ipsam rem at, dolor blanditiis dicta quae quaerat itaque inventore, nostrum aliquid nemo culpa.</p> */}
      </div>
     
      </div>
   
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
      </div>

  );
};

export default Shop;