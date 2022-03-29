import {React,memo} from "react";
import {Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Navigationbar()
{
    return(<>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{fontSize:"17px"}} fixed="top">
  <Container>
  <Navbar.Brand href="#home">bookWorm.com</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Library">Library</Nav.Link>
      <Nav.Link href="/Help">Help</Nav.Link>
      <Nav.Link href="/Shelf">My Shelf</Nav.Link>
      <Nav.Link href="/About">About Us</Nav.Link>
      <Nav.Link href="/">Contact Us</Nav.Link>
      <Nav.Link href="/Feedback">Feedback</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="/Signup">Signup</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
      <Nav.Link href="/Cart">Cart</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
  
  </Container>
  
</Navbar>
<Outlet/>
</>
    );
}
export default memo(Navigationbar);