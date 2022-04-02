import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";



const NaviBar = props => {
  let {isLoggedIn,rrid,removeUser} = props;
  
 return (<>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
       <Container>
       <Navbar.Brand href="#home">bookWorm.com</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
         <Nav.Link href="/">Home</Nav.Link> 
         <Nav.Link href="/Library">Library</Nav.Link>
         <Nav.Link href="/Shelf">About Us</Nav.Link>
           <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
           <Nav.Link href="/Feedback">Feedback</Nav.Link>
           <Nav.Link href="/Help">Help</Nav.Link>
         </Nav>
         <Nav><Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Signup">Sign Up</Nav.Link> 
            </Nav>
       </Navbar.Collapse>
       </Container>
     </Navbar>
</>)

  
 }
 
export default NaviBar;
  
  
  //   else
  //      return
  //      (
  //       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //   <Container>
  //   <Navbar.Brand href="#home">bookWorm.com</Navbar.Brand>
  //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //   <Navbar.Collapse id="responsive-navbar-nav">
  //     <Nav className="me-auto">
  //     <Nav.Link href="/Home">Home</Nav.Link> 
  //     <Nav.Link href="/Library">Library</Nav.Link> 
  //     <Nav.Link href="/AboutUs">About Us</Nav.Link>
  //       <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
  //       <Nav.Link href="/Feedback">Feedback</Nav.Link>
  //       <Nav.Link href="/Help">Help</Nav.Link>
  //     </Nav>
  //     <Nav>
  //     <Nav.Link href="/Home">Log In</Nav.Link> 
  //     <Nav.Link href="/Library">Sign Up</Nav.Link>
  //     </Nav>
  //   </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  //      )
