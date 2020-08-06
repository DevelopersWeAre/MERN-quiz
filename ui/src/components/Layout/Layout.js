import React from "react";
import PropTypes from "prop-types";

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ display: "flex", flex: 1 }}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
