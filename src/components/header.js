import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo.svg";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <>
      <Navbar className="sticky-top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            symbol="🐑"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          SISTELITEN
        </Navbar.Brand>
        <Nav className="ml-auto text-right">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#venta">Venta</Nav.Link>
              <Nav.Link href="#somos">Quienes Somos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
