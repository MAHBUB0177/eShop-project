import React from 'react';
// import{Card,CardHeader,CardBody,CardTitle,CardText,CardFooter} from 'reactstrap'
import './about.css'
import {Card,} from 'react-bootstrap'
import shopping9 from '../images/shoping9.jpg'
import shopping6 from '../images/shoping6.jpg'
import shopping7 from '../images/shoping7.jpg'

import shopping8 from '../images/shoping8.jpg'

const About = () => {
 return (
  <div>
   <div style={{marginLeft:'80px'}}>
     <div>
    <Card style={{ width: 'auto' ,height:'auto'}}>
        <Card.Img  src={shopping8}  alt="" style={{height:'400px'}}/>
       </Card>
     </div>

     <div className="main">
       <div className="text">
      <h1>Welcome To Our eShop</h1>
      <p>Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.
      </p>
      <p>
      Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
      </p>
      
      <div style={{display:'flex'}}>
        <div>
        <Card style={{ width: '15rem',height:'110px',background:'tomato',marginRight:'5px' }}>
      <h4>10K</h4>
      <h6>Listed Products</h6>
      <p >Dynamically morph team driven partnerships after vertical</p>
     </Card>
        </div>


        <div>
        <Card style={{ width: '15rem',height:'110px',background:'tomato' }}>
      <h4>8K</h4>
      <h6>Lovely Customer</h6>
      <p >Dynamically morph team driven partnerships after vertical</p>
     </Card>
        </div>

      </div>
     


       </div>

       <div className="picture">
        
        <div style={{marginRight:'8px'}}>
        <Card style={{ width: '18rem',marginBottom:'8px' }}>
        <Card.Img  src={shopping9}  alt=""/>
        </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img  src={shopping6}  alt=""/>
              
          </Card>
        </div>

        <div>
        <Card style={{ width: '25rem' ,height:'415px'}}>
        <Card.Img  src={shopping7}  alt="" style={{height:'415px'}}/>
       </Card>
        </div>


       </div>

     </div>
  
</div>
  </div>
 );
};

export default About;