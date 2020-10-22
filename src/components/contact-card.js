import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

function ContactCard() {
  return (
    <>
      <div className="container">
        <Card className="text-center border-0">
          <Card.Header className="bg-service-card" id="somos">
            QUIENES SOMOS
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {" "}
              Somos Pablo y Nahuel compañeros de trabajo, ofrecemos soporte
              técnico, mantenimiento y arreglo de computadoras, notebooks,
              netbooks y celulares, de manera remota o presencial. Tambien
              reacondicionamos unidades para la venta, estamos en Bahía Blanca{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ContactCard;
