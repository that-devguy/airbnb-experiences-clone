import React from "react";
import Photo from "../images/katie-zaferes.png";
import Star from "../images/star.png";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <div className="card--container">
      <img className="card--photo" src={Photo} alt="Katie Zaferes" />
      <div className="card--ratingContainer">
        <img className="card--star" src={Star} alt="Star Icon" />
        <p className="card--ratingText">
          5.0 <span className="card--subText">{"(6)·USA"}</span>
        </p>
      </div>
      <p className="card--infoText">Life lessons with Katie Zaferes</p>
      <p className="card--price">
        <span className="card--priceText">From $136</span> / person
      </p>
    </div>
  );
}
