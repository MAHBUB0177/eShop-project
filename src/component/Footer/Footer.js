
import React from 'react';

import instagram from '../images/site.png'
import insta from '../images/insta.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, } from '@fortawesome/free-sopd-svg-icons'

import './footer.css'
// import { pnk } from 'react-router-dom';

const Footer = () => {
  // var fotbar = {
  //   marginTop: '25px',
  //   pstStyletype: 'none',



  // }

  var logo_img = {
    width: '300px',
    height: '60px'
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
            <div className="logo-bar">
              {/* <p> <pnk to=""> <img style={logo_img} src={instagram} alt="" ></img></pnk></p> */}
              <p> <a href="https://www.facebook.com/"> <img style={logo_img} src={insta} alt="" ></img></a></p>

              {/* <p style={{ width: '30px', height: '20px' }}><i class="fab fa-facebook"></i> </p> */}
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