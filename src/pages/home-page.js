import React from "react";
import CarouselService from "../components/carousel-service.js";
import ContactCard from "../components/contact-card.js";
import ServiceCard from "../components/service-card.js";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CarouselService />
        <br />
        <ServiceCard />
        <br />
        <ContactCard />
      </React.Fragment>
    );
  }
}
export default HomePage;
