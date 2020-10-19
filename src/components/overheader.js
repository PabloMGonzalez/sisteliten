import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

function OverHeader() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
      </Navbar>
    </>
  );
}

export default OverHeader;
