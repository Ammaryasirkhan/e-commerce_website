import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";

const Items = (props) => {
  return (
    <div className="items">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="items-prices">
        <div className="items-price-new">${props.newPrice} </div>
        <div className="items-price-old">${props.oldPrice} </div>
      </div>
    </div>
  );
};

export default Items;
