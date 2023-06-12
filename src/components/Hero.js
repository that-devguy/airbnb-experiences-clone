import React from "react";
import Image1 from "../images/hero-image1.png";
import Image2 from "../images/hero-image2.png";
import Image3 from "../images/hero-image3.png";
import Image4 from "../images/hero-image4.png";
import Image5 from "../images/hero-image5.png";
import Image6 from "../images/hero-image6.png";
import Image7 from "../images/hero-image7.png";
import Image8 from "../images/hero-image8.png";
import Image9 from "../images/hero-image9.png";

function Hero() {
  return (
    <div className="hero--container">
      <div className="hero--imagesContainer">
        <img src={Image1} alt="Cooking Class" />
        <img src={Image2} alt="Baking Class" />
        <img src={Image3} alt="Dancing Lessons" />
        <img src={Image4} alt="Cooking Class 2" />
        <img src={Image5} alt="Guitar Lessons" />
        <img src={Image6} alt="Piano Lessons" />
        <img src={Image7} alt="Swimming Lessons" />
        <img src={Image8} alt="Meditation Session" />
        <img src={Image9} alt="Singing Lessons" />
      </div>
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--subtitle">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
    </div>
  );
}

export default Hero;
