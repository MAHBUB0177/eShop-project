import React, {  useEffect, useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import Product from '../Propduct/Product';
import './productdetails.css'

const ProductDetails = () => {

  const [product, setProduct] = useState()
  const[productDetails,setProductDetails]=useState({})
  // console.log(productDetails)

console.log(product)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProduct(data)
      })

  }, []);

  const handelProduct = (productall) => {
    console.log(product)
    setProductDetails(productall)
  }
 



  return (
    <div className="details">
      <Product handelProduct={handelProduct}
      product={product} />

     
     
   {/* <Card style={{ marginTop: "10px",marginLeft:'20px',marginBottom:'20px' }} className="details1">
          <CardImg top src={image} alt="" style={{ height: '120px', width: '200px', paddingTop: '2px', float: 'right' }} />
          <CardBody style={{ textAlign: "left" }}>
            <CardTitle style={{ color: 'blue', fontSize: '20px' }}>{title}</CardTitle>
            <hr /> 
            <CardText>
              <p >{description}</p>
              <p style={{ color: 'blue', fontSize: '20px' }}>{description}</p>
               
              <p style={{ fontWeight: 'bolder', fontSize: '15px' }}>Price: {}/-</p> 

              
            </CardText>


         </CardBody>
        </Card>  */}









    </div>
  );
};

export default ProductDetails;