import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./sell-card.css";

class Title extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card.Header className="text-center bg-title" id="servicios">
          <h4 id="venta">{this.props.title}</h4>
        </Card.Header>
      </React.Fragment>
    );
  }
}
export default Title;
