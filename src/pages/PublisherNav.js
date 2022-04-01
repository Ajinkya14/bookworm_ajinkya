import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";



function PublisherNav(props){
    const id=sessionStorage.getItem("UserId");
    let {isLoggedIn,rrid,removeUser} = props;
return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
       <Container>
       <Navbar.Brand href="#home">bookWorm.com</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
         <Nav.Link href="/">Home</Nav.Link> 
         <Nav><Nav.Link href="/AddProduct">Add New Product</Nav.Link>
           <Nav.Link href={"/PublisherProduct/"+id}>Your Listings</Nav.Link> 
           <Nav.Link href="/Shelf">Total Sold Books</Nav.Link></Nav>
         <Nav.Link href="/Shelf">About Us</Nav.Link>
           <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
           <Nav.Link href="/Feedback">Feedback</Nav.Link>
           <Nav.Link href="/Help">Help</Nav.Link>
         </Nav>
         <Nav>
        <NavDropdown title={sessionStorage.getItem("Name")} id="collasible-nav-dropdown">
             <NavDropdown.Item href={"/Profile"} className='glyphicon glyphicon-user'>Profile</NavDropdown.Item>
             <NavDropdown.Item href="/" className='glyphicon glyphicon-log-out' onClick={removeUser}>Logout</NavDropdown.Item>
           </NavDropdown>
           
           
         </Nav>
       </Navbar.Collapse>
       </Container>
     </Navbar>
    </>
)
};

export default PublisherNav;