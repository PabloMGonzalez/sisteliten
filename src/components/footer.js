import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <React.Fragment>
      <div className="bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col d-inline-flex mt-1">
              <h5 className="pt-2">Copyright © SISTELITEN</h5>
            </div>
            <div className="col-sm-2 text-right">
              <h5 className="d-inline-flex p-2">seguinos!</h5>
              <FontAwesomeIcon
                className="margin-icons"
                icon={faInstagram}
                size="lg"
              />
              <FontAwesomeIcon
                className="margin-icons"
                icon={faFacebook}
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
