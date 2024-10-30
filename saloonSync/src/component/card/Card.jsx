import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => navigate(`/details/${data?.saloonId}`)}
    >
      <div className="imageWrapper">
        <img src={data?.imageURL} />
      </div>
      <div className="cardContent">
        <span className="name">{data?.saloonName}</span>
        <span className="category">{data?.category}</span>
        <span className="address">{data?.address}</span>
      </div>
    </div>
  );
};

export default Card;
