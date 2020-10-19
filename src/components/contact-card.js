import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

function ContactCard() {
  return (
    <>
      <Card className="text-center">
        <Card.Header>QUIENES SOMOS</Card.Header>
        <Card.Body>
          <Card.Text>PABLITO EL SISTELITEN CAPO </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ContactCard;
