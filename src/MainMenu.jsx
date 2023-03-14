import "bootstrap/dist/css/bootstrap.min.css"
import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


export default function MainMenu() {
  return (
    <div className="bar">
      <Navbar className="position-absolute top-0 start-0 w-100" bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand expand="lg" href="#home">Feature Flicks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Booking" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}