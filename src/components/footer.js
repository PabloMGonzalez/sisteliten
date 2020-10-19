import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <React.Fragment>
      <div className="bg box">
        <div className="container row">
          <div className="col-md-2">
            <h4 className="text-left">Copyright © SISTELITEN</h4>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <h4>Estoy en:</h4>
            <FontAwesomeIcon icon={faInstagram} size="4x" />
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
