import React from "react";
import { Navbar, Nav } from "react-bootstrap";
export default function Navbarr() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Ciné</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">movies</Nav.Link>
        <Nav.Link href="#features">series</Nav.Link>
        <Nav.Link href="#pricing">anime</Nav.Link>
      </Nav>
    </Navbar>
  );
}
