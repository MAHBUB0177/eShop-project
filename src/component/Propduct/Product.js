import React, { useContext } from 'react';
import './product.css'
import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardSubtitle, CardGroup, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {



// function loading(){
//   setTimeout(function () {
//     <Spinner>
//     Loading...
//   </Spinner>
//   }, 3000);
// }
 


  
  const countProduct = props.countProduct;
  const { title, price, image } = props.product;
  const handelProduct = props.handelProduct;
  return (
    <div className="row" style={{ display: 'inline-block' }}>
      <div className="col-md-3">
        <Card style={{ marginTop: "10px",height:'350px'}} className="product">
          <CardImg top src={image} alt="" style={{ height: '100px', width: '200px', textAlign: 'center' }} />
          <CardBody style={{ textAlign: "left" }}>
            <CardTitle style={{ color: 'blue', fontSize: '20px' }}>{title}</CardTitle>
            <hr />
            <CardText>
              {/* <p >{description}</p> */}
              {/* <p>{category}</p> */}
              <p>Price: {price}/-</p>
              <Link to="/details">
                <button style={{ marginRight: '5px' }} className="btn btn-primary btn-sm" onClick={() => handelProduct(props.product)} >Details</button></Link>
              <button className="btn btn-danger btn-sm" onClick={() => countProduct(props.product)}><i class="fas fa-shopping-cart"></i>Add to Cart</button>
              {/* <button onClick={loading}>click</button> */}
            </CardText>
            <hr />

          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default Product;