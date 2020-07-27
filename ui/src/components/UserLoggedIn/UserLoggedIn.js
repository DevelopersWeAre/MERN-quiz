import React, { useState } from "react";
import "./UserLoggedIn.css";
import iconPower from "../../assets/icon-power.svg";

const UserLoggedIn = () => {
  const [ isLoggedIn ] = useState(false);

  return isLoggedIn ? (
    <div className="UserLoggedIn">
      Welcome, <span className="UserLoggedIn-email">johnDoe@email.com</span> <img src={iconPower} className="UserLoggedIn-icon" alt="power icon" />
    </div>
  ) : null;
};

export default UserLoggedIn;
