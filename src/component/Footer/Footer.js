
import React from 'react';

import instagram from '../images/site.png'
// import insta from '../images/insta.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, } from '@fortawesome/free-sopd-svg-icons'

import './footer.css'
import facebook from '../images/fb.jpg'
import insta from '../images/insta1.jpg'
// import twiteer from '../images/twitter1.jpg'
import twiteer from '../images/twiteer1.jpg'
import whatsapp from '../images/whatsapp .jpg'

const Footer = () => {

  var logo_img = {
    width: '50px',
    height: '40px'
  }

  return (
    <div className="footer" >

      <div className=" middle" >

        <div className="ok" style={{ paddingLeft: '50px', marginRight: '65px' }}>
          <h1 style={{ fontSize: '30px', color: 'tomato', paddingLeft: '10px' }}> <i class="fab fa-shopify"></i>eShop </h1>
          <p>There are many popular products you will find our shop, Choose your daily <br />
            necessary product from our KachaBazar shop and get some special offer.</p>
          <div style={{ paddingTop: '5px' }}>
            <p>Follow Us</p>
            <div className="logo-bar" >
              <p> <a href="https://www.instagram.com/"> <img style={logo_img} src={insta} alt="" >
              </img></a> <a href="https://www.facebook.com/"> <img style={logo_img} src={facebook} alt=''/> </a>
              <a href="https://twitter.com/login?lang=en"> <img style={logo_img} src={twiteer} alt=''/> </a>
              <a href="https://www.whatsapp.com/"> <img style={logo_img} src={whatsapp} alt=''/> </a></p>
              
            </div>

          </div>
        </div>

        <div style={{ marginRight: '65px' }}>
          <p>Company</p>
          <hr />
          <p>Abouts</p>
          <p>Contacts</p>
          <p>Carrers</p>
          <p>Latest News</p>
          <p>Information</p>

        </div>

        <div style={{ marginRight: '65px' }}>
          <p>Top Category</p>
          <hr />

          <p>T-shirts</p>
          <p>Gents Shirts</p>
          <p>Gamin Drive</p>
          <p>Mobile Phone</p>
          <p>Laptop</p>

        </div>

        <div style={{ marginRight: '65px' }}>
          <p>My Account</p>
          <hr />

          <p>Dashboard</p>
          <p>Account Info</p>
          <p>My Orders</p>
          <p>Recent Orders</p>
          <p>Update Profile</p>

        </div>
<hr/>
      </div>

      <div className="col-auto">
        <hr />
        <p style={{ paddingLeft: '50px',}}>  copyright 2021@<span style={{ color: 'tomato' }}>HtmLover</span>  all rights reserved</p>

      </div>
    </div>

  );
};

export default Footer;