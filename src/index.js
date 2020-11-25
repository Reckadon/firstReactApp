import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CountersHolder from "./components/countersHolder";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
