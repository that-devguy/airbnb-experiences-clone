import React from "react";
import photoGrid from "../images/photo-grid.png";

function Hero() {
  return (
    <div className="hero--container">
      <img className="hero--photo" src={photoGrid} alt="Online Experiences" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--subtitle">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
