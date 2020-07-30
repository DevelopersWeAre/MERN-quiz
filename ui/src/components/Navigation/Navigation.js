import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => (
  <nav>
    <ul className="main-nav">
      <li className="main-nav-item">
        <NavLink className="main-nav-link" activeClassName="active" exact to="/">Home</NavLink>
      </li>
      <li className="main-nav-item">
        <NavLink className="main-nav-link" activeClassName="active" to="/quizzes">Quizzes</NavLink>
      </li>
      <li className="main-nav-item">
        <NavLink className="main-nav-link" activeClassName="active" to="/ladder">Ladder</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
