import React from "react";
import Banner from "../components/banner.js";
import ContactCard from "../components/contact-card.js";
import SellCard from "../components/sell-card.js";
import ServiceCard from "../components/service-card.js";
import "./home-page.css";
import firebase from "firebase/app";
import "firebase/database";
import Title from "../components/title.js";
import {
  faDatabase,
  faMobileAlt,
  faTools,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

class HomePage extends React.Component {
  state = {
    data: [],
    contact: [],
    title1: [],
    title2: [],
    title3: [],
    title4: [],
    title5: [],
    banner: [],
    services: [],
  };

  componentDidMount() {
    const db = firebase.database();

    const dbRefSells = db.ref("sells");
    dbRefSells.on("child_added", (snapshot) => {
      this.setState({ data: this.state.data.concat(snapshot.val()) });
    });

    const dbRefContact = db.ref("us");
    dbRefContact.on("child_added", (snapshot) => {
      this.setState({ contact: this.state.contact.concat(snapshot.val()) });
    });

    //#region saco de la base de datos los titulos
    const dbRefTitle1 = db.ref("title1");
    dbRefTitle1.on("child_added", (snapshot) => {
      this.setState({ title1: this.state.title1.concat(snapshot.val()) });
    });

    const dbRefTitle2 = db.ref("title2");
    dbRefTitle2.on("child_added", (snapshot) => {
      this.setState({ title2: this.state.title2.concat(snapshot.val()) });
    });

    const dbRefTitle3 = db.ref("title3");
    dbRefTitle3.on("child_added", (snapshot) => {
      this.setState({ title3: this.state.title3.concat(snapshot.val()) });
    });

    const dbRefTitle4 = db.ref("title4");
    dbRefTitle4.on("child_added", (snapshot) => {
      this.setState({ title4: this.state.title4.concat(snapshot.val()) });
    });

    const dbRefTitle5 = db.ref("title5");
    dbRefTitle5.on("child_added", (snapshot) => {
      this.setState({ title5: this.state.title5.concat(snapshot.val()) });
    });
    //#endregion

    const dbRefBanner = db.ref("banner");
    dbRefBanner.on("child_added", (snapshot) => {
      this.setState({ banner: this.state.banner.concat(snapshot.val()) });
    });

    const debRefServices = db.ref("services");
    debRefServices.on("child_added", (snapshot) => {
      this.setState({ services: this.state.services.concat(snapshot.val()) });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.title1.map((title, i) => {
          return (
            <h1 className="text-center" id="home" key={i}>
              {title.title}
            </h1>
          );
        })}

        {this.state.title2.map((title, i) => {
          return (
            <h3 className="text-center pb-2" key={i}>
              {title.title}
            </h3>
          );
        })}

        {this.state.banner.map((banner, i) => {
          return <Banner image={banner.image} key={i} />;
        })}

        {this.state.title3.map((title, i) => {
          return <Title title={title.title} key={i} id="servicios" />;
        })}

        <div className="bg-dark text-white">
          <div className="container">
            <div className="row">
              {this.state.services.map((services, i) => {
                switch (i) {
                  case 0:
                    return (
                      <ServiceCard
                        icon={faTools}
                        name={services.name}
                        key={i}
                        txt={services.txt}
                      />
                    );
                  case 1:
                    return (
                      <ServiceCard
                        icon={faDesktop}
                        name={services.name}
                        key={i}
                        txt={services.txt}
                      />
                    );
                  case 2:
                    return (
                      <React.Fragment key={i}>
                        <div className="w-100"></div>
                        <ServiceCard
                          icon={faDatabase}
                          name={services.name}
                          key={i}
                          txt={services.txt}
                        />
                      </React.Fragment>
                    );
                  case 3:
                    return (
                      <ServiceCard
                        icon={faMobileAlt}
                        name={services.name}
                        key={i}
                        txt={services.txt}
                      />
                    );
                }
              })}
            </div>
          </div>
        </div>

        {this.state.title4.map((title, i) => {
          return <Title title={title.title} key={i} id="venta" />;
        })}

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

        {this.state.title5.map((title, i) => {
          return <Title title={title.title} key={i} id="somos" />;
        })}
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
