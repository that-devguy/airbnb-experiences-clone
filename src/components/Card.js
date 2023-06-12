import React from "react";
import Star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card--container">
      <img className="card--photo" src={`../images/${props.img}`} alt="Katie Zaferes" />
      <div className="card--ratingContainer">
        <img className="card--star" src={Star} alt="Star Icon" />
        <span className="card--rating">{props.rating}</span>
        <span className="grey">({props.reviewCount}) · </span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--infoText">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
