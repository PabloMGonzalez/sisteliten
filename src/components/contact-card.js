import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import firebase from "firebase/app";
import "firebase/firebase-storage";
import "./contact-card.css";

class ContactCard extends React.Component {
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
      <>
        <Card className="text-center border-0 bg-dark text-white">
          <Card.Body>
            <div className="container text-center">
              <img
                src={this.state.url}
                className="pb-3 d-inline img-us"
                alt=""
              />
              <Card.Text className="text-block">{this.props.txt}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default ContactCard;
