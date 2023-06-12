import React from "react";
import Logo from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="navbar--container">
      <img src={Logo} alt="Airbnb Logo" />
    </nav>
  );
}

export default Navbar;
