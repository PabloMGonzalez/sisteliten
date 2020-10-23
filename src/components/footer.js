import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <React.Fragment>
      <div className="bg">
        <div className="container-fluid">
          <div className="row ">
            <div className="pl-2 pt-3">
              <a
                href="https://www.instagram.com/siste_liten/"
                className="button-social"
                target="_blank"
              >
                <FontAwesomeIcon className="" icon={faWhatsapp} size="2x" />
              </a>
            </div>
            <div className="col pt-2">
              <h6 className="d-inline-flex">Contacto Nahuel: 291-4370855</h6>
              <h6 className="d-inline-flex">Contacto Pablo: 291-4139615</h6>
            </div>

            <div className="col text-center pt-2">
              <a
                href="https://www.instagram.com/siste_liten/"
                className="button-social"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="margin-icons"
                  icon={faEnvelope}
                  size="lg"
                />
              </a>
              <h5 className="d-inline-flex"> pm.gonzaalez@gmail.com</h5>
            </div>

            <div className="col text-center bg2 pt-2">
              <h5 className="d-inline-flex">seguinos!</h5>
              <a
                href="https://www.instagram.com/siste_liten/"
                className="button-social"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="margin-icons"
                  icon={faInstagram}
                  size="lg"
                />
              </a>
              <a
                href="https://www.facebook.com/sisteliten"
                className="button-social"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="margin-icons"
                  icon={faFacebook}
                  size="lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
