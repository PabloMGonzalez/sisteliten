import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./sell-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/firebase-storage";

class SellCard extends React.Component {
  state = {
    url: null,
  };
  componentDidMount() {
    let referencia = this.props.image;
    var pathReference = firebase
      .storage()
      .ref(referencia)
      .getDownloadURL()
      .then((url) => {
        this.setState({ url });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-4 d-flex pb-2">
          <div className="container">
            <Card className="border text-center">
              <div className="text-center">
                <Card.Img variant="top" src={this.state.url} className="" />
                <hr />
              </div>
              <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <h4 className="price">{this.props.price}</h4>
                <Card.Text className="text-left">
                  <ul>
                    <li>Pantalla: {this.props.screen}</li>
                    <li>Procesador: {this.props.proc}</li>
                    <li>RAM: {this.props.ram}</li>
                    <li>Cámara: {this.props.camera}</li>
                    <li>Almacenamiento: {this.props.storage}</li>
                    <li>OS: {this.props.os}</li>
                  </ul>
                </Card.Text>
                <Button
                  className="btn-sell d-inline-flex"
                  href="https://www.wa.link/e9jo9a"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
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
