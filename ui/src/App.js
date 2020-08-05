import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Routes from "./components/Routes/Routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
