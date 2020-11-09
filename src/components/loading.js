import React from "react";
import "./loading.css";
import logo from "../logo.svg";

function Loading() {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="spinner-grow" role="status">
          <span className="sr-only">{logo}</span>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Loading;
