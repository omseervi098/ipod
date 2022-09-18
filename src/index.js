import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDPysl0W28qGPCJzha6V3WO4xRdcvNpXWc",
  authDomain: "ipod-e4eb6.firebaseapp.com",
  projectId: "ipod-e4eb6",
  storageBucket: "ipod-e4eb6.appspot.com",
  messagingSenderId: "334199640619",
  appId: "1:334199640619:web:fdef97117be7b62daa906e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
