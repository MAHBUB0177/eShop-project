import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
// import {Form,FormControl,Button, FormGroup} from 'reactstrap'
import { Button, Form, FormControl, Navbar, Container, Nav } from 'react-bootstrap';
import images from '../images/site.png'
import Navbar1 from '../Sidebar/Navbar';
const Header = () => {


  var styling={
    fontSize:'20px',
    paddingRight:'30px'
  }
  return (
    <div>


      <div className="header">

         <Navbar bg="dark" variant="dark" style={{height:'50px'}}>
          <Container fluid>
            <Navbar.Brand href="#"><h1 style={{fontSize:'30px',color:'tomato'}}><i class="fab fa-shopify"></i>eShop</h1></Navbar.Brand>
            {/* <Navbar.Img src="/image/site.png"  alt=""/> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                  
                <Nav.Link style={styling} active href="/shop">Shop</Nav.Link>
                <Nav.Link style={styling} active href="/order">Order</Nav.Link>
                {/* <Nav.Link style={styling} active href="/review">Review</Nav.Link> */}
                <Nav.Link style={styling} active href="/inventory">Inventory</Nav.Link>
                <Nav.Link style={styling} active href="/contact">Contact</Nav.Link>
                <Nav.Link style={styling} active href="/login"><i class="fas fa-user-circle"></i>Login</Nav.Link>

                
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar> 

        {/* <nav className="nav">
    
          <Link to="/shop">Shop</Link>
          <Link to="/order">Order</Link>
          <Link to="/review">Review</Link>
           <Link to="/inventory">Inventory</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link> 
        </nav>   */}




      </div>
      <Navbar1/>
    </div>
  );
};

export default Header;