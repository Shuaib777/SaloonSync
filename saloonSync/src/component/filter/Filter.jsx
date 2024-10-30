import { Rating } from "@mui/material";
import React, { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import "./style.scss";

const Filter = () => {
  const [rating, setRating] = useState(2.5);

  const handleRating = (_, value) => {
    setRating(value);
  };

  return (
    <div className="filter">
      <div className="box">
        <div className="preference">
          <span className="prefHeading">Prefrences</span>
          <span className="icon">
            <VscSettings />
          </span>
        </div>
      </div>
      <div className="box">
        <div className="heading">Gender</div>
        <div className="items">
          <div className="item">
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" />
          </div>
          <div className="item">
            <label htmlFor="female">female</label>
            <input type="radio" name="gender" id="female" />
          </div>
          <div className="item">
            <label htmlFor="unisex">unisex</label>
            <input type="radio" name="gender" id="unisex" />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="heading">Price Range</div>
        <div className="range">
          <div className="lowRange">
            <input type="number" placeholder="₹0" />
          </div>
          <div>-</div>
          <div className="highRange">
            <input type="number" placeholder="₹2000" />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="heading">Sort Price</div>
        <div className="items">
          <div className="item">
            <label htmlFor="lth">Low to High</label>
            <input type="radio" name="priceSort" id="lth" />
          </div>
          <div className="item">
            <label htmlFor="htl">High to Low</label>
            <input type="radio" name="priceSort" id="htl" />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="heading">Rating</div>
        <Rating
          name="half-rating"
          value={rating}
          onChange={handleRating}
          precision={0.5}
        />
      </div>
    </div>
  );
};

export default Filter;
