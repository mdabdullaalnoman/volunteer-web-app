import React from 'react';
import { Button, Nav, Navbar} from 'react-bootstrap';
import './Header.css';
const Header = () => {
  return (
  
      <Navbar bg="light" expand="lg">
      <div className="container">
      <Navbar.Brand href="#home"><img style={{ height: '50px' }} src="https://i.imgur.com/OR2myly.png" alt="logo"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="">Event</Nav.Link>
          <Nav.Link href="">Added</Nav.Link>
          <Nav.Link href="">Blog</Nav.Link> 

          <a href=""><Button className="mx-0 mx-lg-2" variant="warning">Register</Button></a>
          <a href="/admin"><Button variant="danger">Admin</Button></a>
        </Nav>        
      </Navbar.Collapse>
      </div>
    </Navbar>
    
  );
};

export default Header;