import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./sell-card.css";
import "./service-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function ServiceCard() {
  return (
    <React.Fragment>
      <div className="container">
        <Card.Header
          className="text-center mb-3 bg-service-card"
          id="servicios"
        >
          SERVICIOS
        </Card.Header>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <FontAwesomeIcon
              className="margin-icons"
              icon={faTools}
              size="4x"
            />
            <h5 className="mt-2">MANTENIMIENTO DE PC</h5>
            <p className="blocktext">
              Limpieza, cambio de pasta termica, mantenimiento de hardware y
              cambio de piezas.
            </p>
          </div>
          <div className="col text-center">
            <FontAwesomeIcon
              className="margin-icons"
              icon={faDesktop}
              size="4x"
            />
            <h5 className="mt-2">FORMATEO</h5>
            <p className="blocktext">
              Formateo e instalación de sistemas operativos, <br /> acorde a las
              caracteristicas de tu pc.
            </p>
          </div>
          <div className="w-100"></div>
          <div className="col text-center">
            <FontAwesomeIcon
              className="margin-icons"
              icon={faDatabase}
              size="4x"
            />
            <h5 className="mt-2">BACK UP Y PROGRAMAS</h5>
            <p className="blocktext">
              Respaldo de tus archivos e instalacion de programas, <br /> juegos
              y paquetes a pedido.
            </p>
          </div>
          <div className="col text-center">
            <FontAwesomeIcon
              className="margin-icons"
              icon={faMobileAlt}
              size="4x"
            />
            <h5 className="mt-2">REACONDICIONAMIENTO Y VENTA</h5>
            <p className="blocktext">
              Reacondicionamiento de celulares, <br /> notebookes, netbooks y
              pcs de escritorio a la venta.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ServiceCard;
