import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import flyer1 from "../imgs/flyer1.jpg";
import "./sell-card.css";

function SellCard() {
  return (
    <React.Fragment>
      <Card.Header className="text-center bg-title" id="servicios">
        <h4 id="venta">VENTA</h4>
      </Card.Header>

      <div className="container pt-2">
        <div className="row">
          <div className="col-lg-4 d-flex pb-2">
            <div className="container">
              <Card className="border text-center">
                <div className="text-center">
                  <Card.Img variant="top" src={flyer1} className="img-sell" />
                  <hr />
                </div>
                <Card.Body>
                  <Card.Title>Mantenimiento de PC</Card.Title>
                  <Card.Text>
                    Limpieza, cambio de pasta termica, mantenimiento de hardware
                    y cambio de piezas.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-4 d-flex pb-2">
            <div className="container">
              <Card className="border text-center">
                <div className="text-center">
                  <Card.Img variant="top" src={flyer1} className="img-sell" />
                  <hr />
                </div>
                <Card.Body>
                  <Card.Title>Mantenimiento de PC</Card.Title>
                  <Card.Text>
                    Limpieza, cambio de pasta termica, mantenimiento de hardware
                    y cambio de piezas.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-4 d-flex pb-2">
            <div className="container">
              <Card className="border text-center">
                <div className="text-center">
                  <Card.Img variant="top" src={flyer1} className="img-sell" />
                  <hr />
                </div>
                <Card.Body>
                  <Card.Title>Mantenimiento de PC</Card.Title>
                  <Card.Text>
                    Limpieza, cambio de pasta termica, mantenimiento de hardware
                    y cambio de piezas.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SellCard;
