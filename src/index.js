import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCzsk8-S0PxFotc4O1Oi3tJAzQppG-ze68",
  authDomain: "sisteliten-1c1cf.firebaseapp.com",
  databaseURL: "https://sisteliten-1c1cf.firebaseio.com",
  projectId: "sisteliten-1c1cf",
  storageBucket: "sisteliten-1c1cf.appspot.com",
  messagingSenderId: "490413870414",
  appId: "1:490413870414:web:e4074512fdbca6e899e21f",
  measurementId: "G-WS66BHG23R",
});

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
