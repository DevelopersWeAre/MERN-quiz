import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import UserLoggedIn from "../UserLoggedIn/UserLoggedIn";

const Header = () => (
  <header>
    <Navigation />
    <UserLoggedIn />
  </header>
)

export default Header;
