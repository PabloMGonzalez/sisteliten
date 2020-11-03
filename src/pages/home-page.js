import React from "react";
import Banner from "../components/banner.js";
import ContactCard from "../components/contact-card.js";
import SellCard from "../components/sell-card.js";
import ServiceCard from "../components/service-card.js";
import "./home-page.css";
import firebase from "firebase/app";
import "firebase/database";
import Title from "../components/title.js";

class HomePage extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data: [] });
    const db = firebase.database();
    const dbRef = db.ref("sell");
    dbRef.on("child_added", (snapshot) => {
      this.setState({ data: this.state.data.concat(snapshot.val()) });
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center" id="home">
          SISTELITEN
        </h1>
        <h3 className="text-center pb-2">PC-SERVICE</h3>
        <Banner />
        <ServiceCard />

        <Title title="VENTA" />
        <div className="container pt-2">
          <div className="row">
            {this.state.data.map((sell, i) => {
              return (
                <SellCard
                  title={sell.title}
                  desc={sell.desc}
                  img={sell.image}
                  key={i}
                />
              );
            })}
          </div>
        </div>

        <ContactCard />
      </React.Fragment>
    );
  }
}
export default HomePage;
