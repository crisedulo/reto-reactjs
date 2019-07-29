import React from "react"
import '../index.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

function Header() {
    return (
        <div className="Navegacion">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <img
                src="/colab.png"
                width="110"
                height="30"
                className="d-inline-block align-top"
                alt = "Logo-Colab"
              
            />
          <Nav className="mr-auto ml-4">
            <Nav.Link href="#home">Accommodations</Nav.Link>
            <Nav.Link href="#features">Transportation</Nav.Link>
            <Nav.Link href="#pricing">Things To Go</Nav.Link>
            <Nav.Link href="#pricing">Tours Info</Nav.Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle  variant = "dark" text-color="white" bg="dark" id="dropdown-basic">
                More Info
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#">Get Oferts</Dropdown.Item>
                <Dropdown.Item href="#">Social Media</Dropdown.Item>
                <Dropdown.Item href="#">Contact</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Navbar>
        </div>
    );
  }
  export default Header;
  