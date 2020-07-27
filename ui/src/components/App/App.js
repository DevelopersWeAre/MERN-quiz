import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Routes from "../Routes/Routes";
import Footer from "../Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
