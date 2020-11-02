import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "../imgs/img1.gif";
import "./banner.css";

function Banner() {
  return (
    <>
      <div className="container rounded pb-4 size-banner">
        <img
          className="border img-fluid"
          src={img1}
          alt="banner de la pagina"
        />
      </div>
    </>
  );
}

export default Banner;
