import React from "react";
import "./App.css";
import HomePage from "./pages/home-page.js";
import Header from "./components/header.js";
import Footer from "./components/footer";
import Copyright from "./components/copyright";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HomePage />
      <Footer />
      <Copyright />
    </React.Fragment>
  );
}

export default App;
