import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./sell-card.css";
import "./service-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ServiceCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col text-center">
          <FontAwesomeIcon
            className="col text-center"
            icon={this.props.icon}
            size="5x"
          />
          <h5 className="mt-2"> {this.props.name}</h5>
          <p className="blocktext">{this.props.txt}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default ServiceCard;
