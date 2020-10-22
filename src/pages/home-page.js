import React from "react";
import Banner from "../components/banner.js";
import ContactCard from "../components/contact-card.js";
import ServiceCard from "../components/service-card.js";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center" id="home">
          SISTELITEN
        </h1>
        <h3 className="text-center pb-2">PC SERVICE</h3>
        <Banner />
        <ServiceCard />
        <ContactCard />
      </React.Fragment>
    );
  }
}
export default HomePage;
