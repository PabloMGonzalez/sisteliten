import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "../imgs/img1.jpg";
import "./banner.css";

function Banner() {
  return (
    <>
      <div className="container rounded">
        <div className="border">
          <img
            className="d-block w-100 img border"
            src={img1}
            alt="First slide"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
