import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

// Stylesheet
import "./index.css";

// Fonts
import "./fonts/Montserrat-Regular.ttf";
import "./fonts/Montserrat-Bold.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
