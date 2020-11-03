import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./sell-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

class SellCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-4 d-flex pb-2">
          <div className="container">
            <Card className="border text-center">
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={this.props.img}
                  className="img-sell"
                />
                <hr />
              </div>
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <h4 className="price">{this.props.price}</h4>
                <Card.Text className="justify-text">
                  {this.props.desc}
                </Card.Text>
                <Button
                  className="btn-sell d-inline-flex"
                  href="https://wa.link/9lcp37"
                  target="_blank"
                >
                  <FontAwesomeIcon className="" icon={faWhatsapp} size="lg" />
                  <p className="pl-2">Contactanos!</p>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SellCard;
