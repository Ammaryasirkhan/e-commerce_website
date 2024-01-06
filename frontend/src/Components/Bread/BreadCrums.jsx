import React from "react";
import "./BreadCrums.css";
import arrow from "../Assets/breadcrum_arrow.png";

const BreadCrums = (props) => {
  const { product } = props;
  return (
    <div className="bread">
      Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" />{" "}
      {product.category} <img src={arrow} alt="" />
      {product.name}
    </div>
  );
};
export default BreadCrums;
