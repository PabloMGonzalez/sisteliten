import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

function ContactCard() {
  return (
    <>
      <Card className="text-center border-0 bg-dark text-white">
        <Card.Header className="bg-title" id="somos">
          <h4>QUIENES SOMOS</h4>
        </Card.Header>
        <Card.Body>
          <div className="container">
            <Card.Text className="">
              {" "}
              Somos Pablo y Nahuel compañeros de trabajo, ofrecemos soporte
              técnico, mantenimiento y arreglo de computadoras, notebooks,
              netbooks y celulares, de manera remota o presencial. Tambien
              reacondicionamos unidades para la venta, estamos en Bahía Blanca{" "}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ContactCard;
