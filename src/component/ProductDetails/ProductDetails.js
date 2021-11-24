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
      <div className="detailsshop">
        
<Spinner>
  Loading...
</Spinner>
        <Card style={{ marginTop: "10px" }} className="productdetails">
          <CardImg top src={detailsProduct.image} alt="" style={{ height: '120px', width: '200px', paddingTop: '2px', float: 'right' }} />
          <CardBody style={{ textAlign: "left" }}>
            <CardTitle style={{ color: 'blue', fontSize: '20px' }}>{detailsProduct.title}</CardTitle>
            <hr />
            <CardText>
              {/* <h4>Rate:{detailsProduct.rating.rate}</h4> */}
              <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>{detailsProduct.category}</p>
              <p style={{ color: 'blue', fontSize: '20px' }}>{detailsProduct.description}</p>
              <p>{detailsProduct.category}</p>
              <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>Price: {detailsProduct.price}/-</p>

              <button className="btn btn-danger btn-sm" >Add to Cart</button>
            </CardText>


          </CardBody>
        </Card>
      </div>

      <div>
        <Cart />
      </div>



    </div>
  );
};

export default ProductDetails;