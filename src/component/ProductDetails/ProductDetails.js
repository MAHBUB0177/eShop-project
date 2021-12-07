import React, { useContext } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardSubtitle, CardGroup ,Spinner} from 'reactstrap';
import { ProductContext } from '../../App';
import Cart from '../Cart/Cart';
import './productdetails.css'
const ProductDetails = () => {

  const [detailsProduct, setdetailsProduct] = useContext(ProductContext);
  // console.log(detailsProduct)
  return (
    <div className="details">
      <div className="detailshop">
        
{/* <Spinner>
  Loading...
</Spinner> */}
        <Card style={{ marginTop: "10px",marginBottom:'10px',marginLeft:'10Px' }} >
          <CardImg top src={detailsProduct.image} alt="" style={{ height: '300px', width: '400px', paddingTop: '2px',  }} />
          <CardBody style={{ textAlign: "left" }}>
            <CardTitle style={{ color: 'blue', fontSize: '20px'}}>{detailsProduct.title}</CardTitle>
            <hr />
            <CardText>
              <h4>Rating:{detailsProduct.rating.rate}</h4>
              <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>Price: {detailsProduct.price}/-</p>
              <p style={{ fontWeight: 'bolder', fontSize: '20px',color:'tomato' }}>category: {detailsProduct.category}</p>
              <p style={{ color: 'blue', fontSize: '20px' }}>{detailsProduct.description}</p>
            </CardText>


          </CardBody>
        </Card>
      </div>

      {/* <div>
        <Cart />
      </div> */}



    </div>
  );
};

export default ProductDetails;