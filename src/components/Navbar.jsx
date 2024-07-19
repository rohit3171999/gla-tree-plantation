import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
const MyNavbar=()=>{
    return(
        <Navbar style={{ backgroundColor: '#FAFA33', fontSize: '20px' }} data-bs-theme="dark">
        <Container className="nav">
          
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: 'green' }}>Home</Nav.Link>
            <Nav.Link href="/register" style={{ color: 'green' }}>Register</Nav.Link>
            <Nav.Link href="/login" style={{ color: 'green' }}>Login</Nav.Link>
            <Nav.Link href="/book/list" style={{ color: 'green' }}>Add Details</Nav.Link>
            <Nav.Link href="/show/details" style={{ color: 'green' }}>Show Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default MyNavbar;