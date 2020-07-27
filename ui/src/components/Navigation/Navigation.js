import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => (
  <nav className="main-nav">
    <li className="main-nav-item">
      <Link className="main-nav-link active" to="/">Home</Link>
    </li>
    <li className="main-nav-item">
      <Link className="main-nav-link" to="/quizzes">Quizzes</Link>
    </li>
    <li className="main-nav-item">
      <Link className="main-nav-link" to="/ladder">Ladder</Link>
    </li>
  </nav>
);

export default Navigation;
