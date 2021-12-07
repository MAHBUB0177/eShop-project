import React from 'react';
import './order.css'

import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardSubtitle, CardGroup ,Spinner} from 'reactstrap';
const OrderReview = (props) => {
 console.log(props.cart)
 const {title,image,price,description}=props.cart;
 return (
  <div className="one" style={{display:'inline-block'}}>


         <Card style={{ marginTop: "10px",marginLeft:'20px',marginBottom:'20px' }} className="details1">
          <CardImg top src={image} alt="" style={{ height: '120px', width: '200px', paddingTop: '2px', float: 'right' }} />
          <CardBody style={{ textAlign: "left" }}>
            <CardTitle style={{ color: 'blue', fontSize: '20px' }}>{title}</CardTitle>
            <hr />
            <CardText>
              <p >{description}</p>
              {/* <p style={{ color: 'blue', fontSize: '20px' }}>{description}</p> */}
              
              <p style={{ fontWeight: 'bolder', fontSize: '15px' }}>Price: {price}/-</p>

              {/* <button className="btn btn-danger btn-sm" >Add to Cart</button> */}
            </CardText>


          </CardBody>
        </Card>






   {/* <div>
    <img src={image} alt="" style={{width:'500px',height:'300px'}}></img>
   </div>
<hr/>
   <div>
    
    <p style={{color:'black',fontWeight:"bold",fontSize:'20px'}}>{title}</p>
    <p style={{fontSize:'15px'}}>{description}</p>
    <p>PRICE:{price}</p>
    <p>{}</p>
   </div>  */}
  
  </div>
 );
};

export default OrderReview;