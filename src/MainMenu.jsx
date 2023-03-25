import "bootstrap/dist/css/bootstrap.min.css"
import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


export default function MainMenu() {
  return (
    <div className="bar">
      <Navbar className="position-absolute top-0 start-0 w-100" bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand expand="lg" href="/">Feature Flicks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Movies</Nav.Link>
              <Nav.Link href="/Screenings">Screenings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}