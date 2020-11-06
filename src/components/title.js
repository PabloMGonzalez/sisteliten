import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./sell-card.css";

class Title extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card.Header className="text-center bg-title">
          <h4 id={this.props.id}>{this.props.title}</h4>
        </Card.Header>
      </React.Fragment>
    );
  }
}
export default Title;
