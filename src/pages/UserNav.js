import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function UserNav(props){
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
         <Nav.Link href="/Library">Library</Nav.Link> 
        <Nav.Link href="/Shelf">My Shelf</Nav.Link>
         <Nav.Link href="/About">About Us</Nav.Link>
           <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
           <Nav.Link href="/Feedback">Feedback</Nav.Link>
           <Nav.Link href="/Help">Help</Nav.Link>
         </Nav>
         <Nav>
        <NavDropdown title={sessionStorage.getItem("Name")} id="collasible-nav-dropdown">
             <NavDropdown.Item href={"/Profile"} className='glyphicon glyphicon-user'>Profile</NavDropdown.Item>
             <NavDropdown.Item href="/Login" className='glyphicon glyphicon-log-out' onClick={removeUser}>Logout</NavDropdown.Item>
           </NavDropdown>
           <Nav.Link class="glyphicon glyphicon-shopping-cart" href="/Cart">Cart</Nav.Link>
           
         </Nav>
       </Navbar.Collapse>
       </Container>
     </Navbar>
     </>
    )
}

export default UserNav;