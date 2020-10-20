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
          <div className="col-md-4">
            <h6 className="">Copyright © SISTELITEN</h6>
          </div>
          <div className="col-sm-6"></div>
          <div className="col-md-2">
            <h4>Estoy en:</h4>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="text-right"
            />
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
