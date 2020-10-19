import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo.svg";

function Header() {
  return (
    <>
      <Navbar className="sticky-top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          SISTELITEN
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
