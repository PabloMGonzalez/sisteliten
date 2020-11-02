import React from "react";
import "./App.css";
import HomePage from "./pages/home-page.js";
import Header from "./components/header.js";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HomePage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
