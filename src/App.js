import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/home-page.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

class App extends React.Component {
  // fake authentication Promise
  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        // fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 2000);
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <HomePage />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
