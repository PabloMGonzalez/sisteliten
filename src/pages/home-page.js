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
  state = {
    data: [],
    contact: [],
    titles: [],
    // title1: "SISTELITEN",
    // title2: "PC-Service",
    // title3: "SERVICIOS",
    // title4: "VENTA",
    // title5: "QUIENES SOMOS"
  };

  componentDidMount() {
    this.setState({ data: [] });
    this.setState({ titles: [] });
    const db = firebase.database();

    const dbRefSells = db.ref("sells");
    dbRefSells.on("child_added", (snapshot) => {
      this.setState({ data: this.state.data.concat(snapshot.val()) });
    });

    const dbRefContact = db.ref("us");
    dbRefContact.on("child_added", (snapshot) => {
      this.setState({ contact: this.state.contact.concat(snapshot.val()) });
    });

    const dbRefTitles = db.ref("titles");
    dbRefTitles.on("child_added", (snapshot) => {
      this.setState({ titles: this.state.titles.concat(snapshot.val()) });
      console.log(snapshot.val());
    });

    // dbRefTitles
    //   .orderByChild("title")
    //   .equalTo("VENTA")
    //   .on("child_added", (snapshot) => {
    //     this.setState({ titles: snapshot.val() });
    //     console.log(snapshot.val());
    //   });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center" id="home">
          SISTELITEN
        </h1>
        <h3 className="text-center pb-2">PC-SERVICE</h3>
        <Banner />
        <Title title="SERVICIOS" />
        <ServiceCard />

        <Title title="VENTA" id="venta" />
        <div className="container pt-2">
          <div className="row">
            {this.state.data.map((sell, i) => {
              return (
                <SellCard
                  name={sell.name}
                  desc={sell.desc}
                  image={sell.image}
                  price={sell.price}
                  key={i}
                />
              );
            })}
          </div>
        </div>

        <Title title={this.state.titles[0]} id="somos" />
        {this.state.contact.map((contact, i) => {
          return (
            <ContactCard image={contact.image} txt={contact.desc} key={i} />
          );
        })}
      </React.Fragment>
    );
  }
}
export default HomePage;
