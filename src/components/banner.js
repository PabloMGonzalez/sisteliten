import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./banner.css";
import firebase from "firebase/app";
import "firebase/firebase-storage";

class Banner extends React.Component {
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
        <div className="container rounded pb-4 size-banner">
          <img className="border img-fluid" src={this.state.url} alt="" />
        </div>
      </>
    );
  }
}

export default Banner;
