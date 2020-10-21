import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import flyer1 from "../imgs/flyer1.jpg";
import flyer2 from "../imgs/flyer2.jpg";
import flyer3 from "../imgs/flyer3.jpg";
import "./service-card.css";

function ServiceCard() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row ml-5">
          <div className="col">
            <Card style={{ width: "18rem" }} className="border">
              <Card.Img variant="top" src={flyer1} />
              <Card.Body>
                <Card.Title>Mantenimiento de PC</Card.Title>
                <Card.Text>
                  Limpieza, cambio de pasta termica, mantenimiento de hardware y
                  cambio de piezas.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }} className="border">
              <Card.Img variant="top" src={flyer2} />
              <Card.Body>
                <Card.Title>Formateo</Card.Title>
                <Card.Text>
                  Formateo e instalación de sistemas operativos acorde a las
                  caracteristicas de tu pc.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col ">
            <Card style={{ width: "18rem" }} className="border">
              <Card.Img variant="top" src={flyer3} />
              <Card.Body>
                <Card.Title>Back Up y Programas</Card.Title>
                <Card.Text>
                  Respaldo de tus archivos e instalacion de programas, juegos y
                  paquetes a pedido.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ServiceCard;
