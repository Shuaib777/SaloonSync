import React from "react";
import "./style.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="imageWrapper">
        <img src="https://plus.unsplash.com/premium_photo-1669675936121-6d3d42244ab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Fsb258ZW58MHx8MHx8fDA%3D" />
      </div>
      <div className="cardContent">
        <span className="name">Salon1</span>
        <span className="category">Unisex</span>
        <span className="address">aljlalkakl fd kjndkjank k </span>
      </div>
    </div>
  );
};

export default Card;
