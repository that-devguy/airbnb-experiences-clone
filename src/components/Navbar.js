import React from "react";
import Logo from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="navbar--container">
      <img className="navbar--logo" src={Logo} alt="Airbnb Logo" />
    </nav>
  );
}

export default Navbar;
